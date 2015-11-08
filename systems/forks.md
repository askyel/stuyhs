### AIM: Go fork off (another process)

fork() - &lt;unistd.h&gt;
+ Creates separate process based on the current one, new process called the child, the original is the parent.  
+ The child process is a duplicate of the parent process. All parts of the parent process are copied, including the stack and heap memory, and the file table.
+ Threads: separate executable entity similar to a child process, except a thread is not standalone process. Does not have its own memory space, but shares with parent memory.
+ Returns 0 to child and child's pid to the parent or -1 (errno).
+ If a parent process ends before the child, the child's new parent pid is 1.

wait() - &lt;unistd.h&gt;
+ Stops a parent process from running until any child has provided status info to parent (usually the child has exited).
