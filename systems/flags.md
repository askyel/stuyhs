### AIM: How do we flag down a resource?
### AIM: Turn down or up?

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

**semop**  
Perform semaphore operations (like Up/Down)  
All operations performed via semop are atomic  
`semop( <DESCRIPTOR>, <OPERATION>, <AMOUNT> )`  
AMOUNT -- amount of semaphores you want to operate on in the semaphore set  
OPERATION -- pointer to a struct sembuf  
```c
struct sembuf {
	short sem_op;  // -1 (Down) or 1 (Up), you can use any -/+ number, 0 blocks until the semaphore reaches 0 
	short sem_num;  // index of the semaphore you want to work on
	short sem_flag;  // further options 
};
```  
**sem_flag**  
SEM_UNDO -- Allow OS to undo given operation, useful in the event that a program exits  
IPC_NOWAIT -- doesn't wait fo semaphore to be available to return error  

```c
int key = ftok("makefile", 'a');
semid = semget( key, 1, 0644);
printf("Before access... \n");

struct sembuf sb;
sb.sem_num = 0;
sb.sem_flg = SEM_UNDO;
sb.sem_op = -1;

semop( semid, &sb, 1 );
int i = 10;
while ( i-- ) {
printf("I'm in \n");
sleep(1);
}

