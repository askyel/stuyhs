### AIM: Ceci n'est nas une pipe.

#### Pipe

A conduit between 2 separate processes.

Pipes have 2 ends, a read end and a write end.

Pipes are unidirectional (a single pipe must be either read or write only in a process).

Pipes act just like files.

You can transfer any data you like through a pipe using read/write.

Unnamed pipes have no external identification (like a descriptor or name).

pipe - `<unistd.h>`  
Create an unnamed pipe.  
Returns 0 if the pipe was created, -1 if not.  
Opens both ends of the pipe as files.  
```c
pipe( int descriptors[2] )
```  
descriptors -- array that will contain descriptros for each end of the pipe  
```c
int des[2];
pipe( des );
char line[100]; 
f = fork();
if (f == 0) {
	close( fd[0] );
	write( des[1], "hello!", 7);
}
else {
	close( fd[1] );
	read( des[0], line, sizeof(line) );
}
```

#### Named Pipes

Also known as FIFOs.

Same as unnamed pipes except FIFOs have a name that can be used to identify them via different programs.

Keep in mind that like unnamed pipes, FIFOs are unidirectional.

mkfifo  
Shell command to make a FIFO  
`$ mkfifo <pipe name>`  

### AIM: A pipe by any other name...

### Named Pipes

mkfifo - `<sys/types.h> <sys/stat.h>`  
c function to create a FIFO  
Returns 0 on success and -1 on failure.  
Once created, the FIFO acts like a regular file, and we can use open, read, write, and close on it. 
`mkfifo( <name>, <permissions> )`

```c
int main() {
	
	int from_client;
	int e;

	e = mkfifo( "mario", 0644 );
	printf("<server> pipe created: %d\n", e);

	from_client = open( "mario", O_RDONLY );
	printf( "<server> pipe open\n" );
	remove("mario");

	read( from_client, line, sizeof(line) );
	printf( "<server> read: [%s]\n", line );

	close(from_client);

	return 0;
}
```

```c
int main() {

	int to_server;
	char line[100];

	to_server = open( "mario", O_WRONLY );
	printf( "<client> pipe open\n");

	printf("<client> enter stuff: ");
	fgets( line, sizeof(line), stdin );

	return 0;
}
```
