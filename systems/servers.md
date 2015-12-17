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
