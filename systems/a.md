### AIM: Invasion of the process snatchers.

**waitpid** - &lt;unistd.h&gt;  
waits for a specific child  
'''c
waitpid( pid, status, options )
'''
*pid*
+ the pid of the specific child to look for
+ if -1, will wait for any child
*options*
+ can set other behavior for wait
+ if 0, will work normally
