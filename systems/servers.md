### AIM: Always remember to tip your servers.

#### Server/Client Program Paradigms

##### Handshake  

A procedure to ensure that a connection has been established.  

Both ends of the connection must verify that they can send and receive data to and from each other.

Basic Handshake Procedure:  
1 Server creates a named pipe (well known pipe)  
2 Server waits for a connection  
3 Client creates a "private" named pipe  
4 Client connects to server and sends the private pipe name.  
5 Client waits for private pipe connection.  
6 Server receives client's message and removes the WKP  
7 Server connects to client pipe, sending an initial acknowledgement message.  
8 Client receives server's message, removes its private pipe  

```c
int server_handshake( int *from_client ) {
	
	int to_client;
	char buffer[100];

	mkfifo( "mario", 0644 );
	*from_client = open( "mario", O_RDONLY );

	remove( "mario" );
	read( *from_client, buffer, sizeof(buffer) );

	to_client = open( buffer, O_WRONLY );

	strncpy( buffer, "its-a-me, mario!", sizeof(buffer) );

	write( to_client, buffer, sizeof(buffer) );

}
``` 

### AIM: Sometimes you have to ask your server for another fork

#### Basic Server  
1 Basic handshake  
2 Server gets data from client, "processes" it and sends back a response  
3 Once client exits, the server recreates a new WKP, removes the old client connections and the steps restart  

```c
while(1) {
	printf("<server> waiting for connection\n");
	to_client = server_handshake( &from_client );

	while( read( from_client, buffer, sizeof(buffer) ) ) {
		printf("<server> received [%s]\n", buffer);
		process(buffer);
		write(to_client, buffer, sizeof(buffer));

		strncpy(buffer, "", sizeof(buffer));
	}
}
```

#### Forking Server

Main server forks off dedicated subservers for each client connection.

Allows for multiple simultaneous clients.

Handshake procedure is modified on the server:  

1 - 6 are the same  
7 Server forks off a subserver.  
8 *Subserver* connects to a client pipe, sending an initial acknowledgement message.  

After the handshake:  
Main server creates a new WKP and waits for a new client.  

#### Central Dispatch Server

server --> subserver 1 --> client 1 --> well-known pipe --> server  
server --> subserver 2 --> client 2 --> well-known pipe --> server  
server: one read end and one write end unnamed pipe for each subserver  
server handles all incoming connections  
