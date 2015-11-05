### AIM: Go fork off (another process)

fork() - <unistd.h>
+ Creates separate process based on the current one, new process called the child, the original is the parent.  
+ The child process is a duplicate of the parent process. All parts of the parent process are copied, including the stack and heap memory, and the file table.
+ Threads: separate executable entity similar to a child process, except a thread is not standalone process. Does not have its own memory space, but shares with parent memory.
