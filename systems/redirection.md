### AIM: Redirection, how does it... SQUIRREL

### File Redirection

Changing the usual input/output behavior of a program.

##### Command Line Redirection

**>**: redirects stdout to a file  
overwrites contents of the file  
`$ ls > temp` puts output of ls into file temp  
`$ cat > c.c` type c.c directly from command line  

**>>**: redirects stdout to a file  
appends instead of overwrites

**2>**: redirects stderr to a file  
overwrites the file (2>> appends) 

**&>**: redirects stdout and stderr

**<**: redirects stdin from a file  

**|** (pipe): redirects stdout of one command to stdin of the next   
`ls | wc` prints number of files in directory  

#### Redirection in C Programs

**dup2** - `<unistd.h>`  
redirect one file descriptor to another  
`dup2( <FILE1>, <FILE2> )` redirects FILE2 to FILE1  
lose any reference to original FILE2, file is closed  

**dup** - `<unistd.h>`  
duplicates existing entry in the file table  
returns a new file descriptor for the duplicate entry  
`dup( <FILE_DESCRIPTOR> )` returns the new file descriptor  
