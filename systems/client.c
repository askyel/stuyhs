#include <stdio.h>

#include <arpo/inet.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>

int main(int argc, char **argv) {
	int socket_id;
	char buffer[256];
	int i;

	// create the socket
	socket_id = socket( AF_INET, SOCK_STREAM, 0 );
	// AF_INET - IPv4 address

	// bind to port/address
	struct sockaddr_in sock;
	listener.sin_family = AF_INET;  // socket type
	listener.sin_port = htons(5000);  // port #
	inet_aton( "127.0.0.1", &(sock.sin_addr) );
	bind( socket_id, (struct sockaddr *)&sock, sizeof(sock));

	// attempt a connection
	i = connect(socket_id, (struct sockaddr *)&sock, sizeof(sock));
	printf("<client> connect returned: %d\n", i);
	if (i == -1) {
		printf("<client> error: %s\n", strerror(errno));
		exit(0);		
	}

	read( socket_id, buffer, sizeof(buffer) );


	return 0;
}

