### AIM: I need information, stat!

**stat** - &lt;sys/stat.h&gt;  
+ Gets information about a file (metadata)  
```
stat( <PATH>, <STAT BUFFER> )  
struct stat sb;  
stat("foo", &sb);
```
+ STAT BUFFER 
	+ must be a pointer to a struct stat
	+ all file info gets put into stat buffer
	+ some fields in struct stat: 
		+ st_size
		    + file size in bytes
		+ st_uid, st_gid
		    + user id, group id
		+ st_mode
		    + file permissions
		+ st_atime, st_mtime
		    + last access, last modification
		    + these are struct time_t variables, usable in time.h to make sense of them
		    + **ctime( &lt;<TIME>&gt; )
			+ TIME is type time_t *
			+ returns the time as a string
		    + **time( &lt;<TIME>&gt; )
			+ TIME is type time_t *
			+ sets the parameter to the current time
