### AIM: Sending mixed signals.

#### Signals

Limited way of sending information to a process.

**kill**  
Command line utility to send a signal to a process  
`$ kill <PID>` sends signal 15 (SIGTERM) to PID  
`$ kill -<SIGNAL> <PID>` sends SIGNAL to PID  

**killall** [-<SIGNAL>] <PROCESS>  
Sends SIGTERM (or SIGNAL if provided) to all processes with PROCESS as the name  

#### Signal handling in c programs `<signal.h>`  

**kill**  
Send a signal to a process in a c program  
`kill(<PID>, <SIGNAL>)` returns 0 on success of -1 (errno) on failure.

**sighandler**  
To work with signals in a c program, you must create a signal handling function.  
Some signals (like SIGKILL) cannot be caught. 

```c
static void sighandler( int signo ) {
	if ( signo == SIGINT )
		printf("Interrupted... how rude!\n");
}

int main() {
	signal( SIGINT, sighandler );
	
	int i = 0;
	while(1) {
		printf("Hello");
	}

	return 0;
}
```
