### AIM: 

Directories
	A *nix directory is a file containing the names of the files wihin the directory along with basic info like file type.  
	Moving files into/out of a directory means changing the directory file, not actually moving any data.

can open directories, but not read them

**opendir** - &lt;dirent.h&gt;  
+ open a directory file
+ does not chage the cwd, only allows program to read contents of directory file  
`opendir( <PATH> );`  
+ returns a pointer to directory stream (DIR *)
 
**closedir** - &lt;dirent.h&gt;
+ closes the directory stream and frees associated pointer
`closedir( <DIRECTORY_STREAM> )`

**readdir** - &lt;dirent.h&gt;  
`readdir( <DIRECTORY STREAM> )`  
+ returns pointer to next entry in a directory stream, or NULL if all entries have already been returned  
+ **struct dirent** - &lt;sys/types.h&gt;
    + directory struct contains info stored in directory file
    + d_name: name of a file
    + d_type: file type as int
