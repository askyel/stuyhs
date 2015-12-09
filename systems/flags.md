### AIM: How do we flag down a resource?

#### Semaphores (created by Edsger Dijkstra)

IPC construct used to control access to a shared resource (like a file or shared memory).

Essentially, a semaphore is a counter that represents how many processes can access a resource at any given time.  

If a semaphore has a value of 3, then it can have 3 active "users".

If a semaphore has a value of 0, then it is unavailable. 

Most semaphore operations are "atomic", meaning they will not be split up into multiple processor instructions.

Semaphore Operations:
+ Create a semaphore
+ Set an initial value
+ Up(S) / V(S) -- release the semaphore to signal you are done with it's associated resource 
	```
	S++
	```
+ Down(S) / V(S) -- attempt to take the semaphore; if 0, wait for it to be available 
	```c
	while( S == 0 )
		block
	S--
	```
+ Removing a semaphore

#### Semaphore Code

**semget** - `<sys/types.h> <sys/ipc.h> <sys/sem.h>`  
Create or get access to a semaphore.  
This is not the same as Up(S), the semaphore is not modified by semget.  
Returns a semaphore descriptor or -1 (errno).  
`semget( <KEY>, <AMOUNT>, <FLAGS> )`  
KEY -- unique semaphore identifier (use ftok)  
AMOUNT -- semaphores are stored as sets, sets number of semaphores to create/get  
FLAGS -- see shared memory flags  

```c
int semd;
semd = semget( ftok("file/dir", 2), 1, 0664 | IPC_CREAT );
```
