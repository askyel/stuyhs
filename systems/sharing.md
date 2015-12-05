### AIM: Sharing is caring!

#### Shared Memory - `<sys/shm.h>, <sys/ipc.h>, <sys/types.h>`

A segment of heap memory that can be accessed by multiple processes.

Shared memory is accessed via some key that is known by any process that needs to access it.

Shared memory does not get released when a program exits.

##### 5 Shared Memory Operations

Create the segment (happens once)

Access the segment (happens once per process)

Attach the segment to a variable (once per process)

Detach the segment from a variable (once per process)

Remove the segment (happens once)

**shmget**
  Create or access a shared memory segment.
  Returns a shared memory descriptor (similar idea to file descriptor), or -1 if it fails.
  `shmget( key, size, flags )`
  + key :: unique integer identifier
  + size :: how much memory to request
  + flags :: 
	  includes permissions for segment
	  IPC_CREAT :: create segment
	  IPC_EXCL :: fail if segment already exists and IPC_CREAT is on

```c
int sd;
sd = shmget( 24601, 1024, IPC_CREAT | 0644 );
```

**shmat**
  Attach a shared memory segment to a variable.
  Returns a pointer to the segment, or -1 (errno).
  `shmat( descriptor, address, flags )`
  + descriptor :: return value of shmget
  + address :: if 0, OS will provide the appropriate address
  + flags :: usually 0, there is one useful flag
		SHM_READONLY :: makes the memory read only

### AIM: Memes

#### Shared Memory

**ftok**  
Generate a key useful for IPC functions.  
`ftok( path, x )`  
- path :: path to some file, must be accessible by the program running
- x :: an int 
```c
sd = shmget( ftok("dir/file", 12), 1024, IPC_CREAT | 0664 )
```

**shmdt**  
Detach a variable from a shared memory segment.  
Returns 0 upon success or -1 upon failure.  
`shmdt( pointer )`  

**shmctl**  
Perform operations on the shared memory segment.  
Each shared memory segment has metadata that can be stored in a struct (struct shid_ds)  
Some of the data stored: last access, size, pid of creator, pid of last modification  
`shmctl( descriptor, command, buffer )`  
- descriptor :: return value of shmget
- command :: 
	- IPC_STAT :: populate the buffer (struct shmid_ds) with information
	- IPC_SET :: set some of the information for the segment to the info in buffer
	- IPC_RMID :: remove a shared memory segment 
