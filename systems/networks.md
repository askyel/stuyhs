### AIM: Cisco in an hour
### AIM: Cisco in an hour, Part II: Electric Boogaloo  
### AIM: Cisco in an hour, Part III: In 3-D!
### AIM: Cisco in an hour, Part IV: A New Hope 

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

##### Physical Layer
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

##### Data Link Layer
**Point-to-point transmission between devices on the same (local) network** 
Each device is given a unique 6-byte MAC address, set on each network card when they are made  
Data is packaged into frames  
Ethernet frame: <prefix><dest><source><...>< data ><checksum>  
				8B		6B		6B		6B	46-1500B	4B
- prefix: 10101010 x7 + 10101011
- destination/source: MAC addresses  
- ...: information about frame type

##### Network Layer
**Transmission of data between two separate networks**  
Major features of this layer are addressing, routing, and packet forwarding.  
Is not concerned with whether or not data was sent successfully (connectionless).  
IP (internet protocol) addresses  
	IPv4: 4 byte addresses  [0-255] . [0-255] . [0-255] . [0-255]
