### AIM: Time to bring out the executioner.

The exec family - &lt;unistd.h&gt;
+ c functions that can be used to run other programs from within our own program
+ relaces current process with new program, any code after exec call is ignored

**execl**  
'''c
execl( <PATH>, <COMMAND>, <ARGS>, NULL )
'''  
*PATH* - path to the program (e.g. "/bin/ls")  
*COMMAND* - name of the program (e.g. "ls")  
*ARGS* - each command line argument you wish to give to each program (e.g. "-a", "-l")  
+ last argument must be NULL
example
'''c
execl( "/bin/ls", "ls", "-a", "-l", NULL );
'''  

**execlp**  
'''c
execlp( <PATH>, <COMMAND>, <ARGS>, NULL )
'''   
works like execl, except uses PATH environment variable for commands  
can use "ls" as PATH instead of "/bin/ls"  

**execvp**  
'''c  
execvp( <PATH>, <ARGUMENT ARRAY> )
'''  
*ARGUMENT ARRAY* - array of strings, element 0 as name of program to be executed, last element must be NULL  
like execlp, PATH argument takes PATH variable into account  
