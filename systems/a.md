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
+  
