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

