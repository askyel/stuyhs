### AIM: Cisco in an hour
### AIM: Cisco in an hour, Part II: Electric Boogaloo  
### AIM: Cisco in an hour, Part III: In 3-D!
### AIM: Cisco in an hour, Part IV: A New Hope 
### AIM: Cisco in an hour, Part V for Vendetta
### AIM: Cisco in an hour, Part VI: The Undiscovered Country
### AIM: Cisco in an hour, Part VII: Adrian's Revenge 

#### OSI 7-Layer Model

Used to help conceptualize the different parts of network connections.

The top layer is the most concrete, with each subsequent layer becoming more abstract (relying less on physical connections and more on code).

The Layers:  
1. Physical  
2. Data Link   
3. Network  
4. Transport  
5. Session  
6. Presentation  
7. Application  

If you are working on a particular layer, you should not have to think too much about the other layers.  

#### Physical Layer
**How computers are physically connected**   
Things like electrons running across wires, radio signals pulsing through the air...  
*A brief history of wired connections*  
Thinnet  
- a single coaxial cable runs throughout the network  
- T-Junctions used to splice connections  
In Thicknet and Thinnet, all data is sent to all computers.   
Each computer added increases the power drain on the entire system, degrading service.  
Token Ring  
- each computer is connected in a ring to each other
- only one computer has command of the network resources at a time ("having the token")
- network sends a "token" throughout the ring, which contains the identity of computer with token, all other computers must wait to use network
- no possibility for collisions
Ethernet  
- multiple computers connect to a single hub or switch 
- Hub: broadcasts data to all the computers (not directed, like a wireless connection or cell tower)   
- Switch: sends data to a specific computer (needs to look at Data Link Layer)  
- more computers added to ethernet network, greater chance of collisions

#### Data Link Layer
**Point-to-point transmission between devices on the same (local) network** 
Each device is given a unique 6-byte MAC address, set on each network card when they are made  
Data is packaged into frames  
Ethernet frame: < prefix (8B) >< dest (6B) >< source (6B) >< ... (6B) >< data (46-1500B) >< checksum (4B) >  
- prefix: 10101010 x7 + 10101011
- destination/source: MAC addresses  
- ...: information about frame type

#### Network Layer
**Transmission of data between two separate networks**  
Major features of this layer are addressing, routing, and packet forwarding.  
Is not concerned with whether or not data was sent successfully (connectionless).  
IP (internet protocol) addresses  
	IPv4: 4 byte addresses  [0-255] . [0-255] . [0-255] . [0-255]  
Routing is made easier by having IP addresses distributed in blocks.  
Data is broken into packets  
< header info (2B) >< packet length (2B) >< fragment info (4B) >  
< time-to-live (1B) >< protocol (1B) >< header checksum (2B) >  
< source (4B) >< destination (4B) >< ... (4B) >< data (20-65535B) >  
header info: packet type (IPv4/6), header length...  
fragment info: full payloads may be broken up, this will have total # of fragments as well as which fragment the current packet contains  
time-to-live: maximum # of hops before the packet dies  
protocol: TCP/UDP/...  
...: optional info depending on type of packet  
IP MTU is 65535B  
##### IPv6  
now 20 years old!  
designed to overcome limitations of IPv4   
Addresses  
- Address space goes from 2^32 -> 2^128
- Addresses are written as 8 groups of 4 hexadecimal digits  
- 87ab : 301c : b251 : ...  
- All existing IPv4 addresses can be written like -> 0000 : 0000 : 0000 : ffff : 149.89.150.100  
MTU  
- ~4.3 billion (2^32)  
- Also referred to as jumbograms

#### Transport Layer 
**Computer to computer connection over multiple networks.**   
Unconcerned with the individual hops of layer 3 traffic.  
Each IP address has multiple ports (65535 ports)  
- ports &lt; 1024 are well known, reserved ports  
- regulated by the Internet Assigned Numbers Authority (IANA)
##### Transmisson Control Protocol (TCP)  
Reliable connection   
Guarantees delivery of data  
Data is considered a continuous stream that arrives in order of sending  
Connections are established using a 3-way handshake: 
1. Server "binds" to a port and waits  
2. Client sends a SYN message to the server  
3. Server sends the client a SYN_ACK message  
4. Client sends an ACK message to the server  
- Once connection is established, data can flow freely between the 2 machines 
##### User Datagram Protocol (UDP)
Does not require explicit connection  
Data is sent as discrete datagrams with a set size (not continuous stream)  
Datagrams may be dropped/received out of order  
UDP connections are faster because they do not need to be reassembled at the other end  
Assumes that any kind of error checking is handled at levels 5-7  
