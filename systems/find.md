### AIM: Seek and ye shall find.

**umask** - &lt;sys/stat.h&gt;  
+ set the file creation permission mask
+ by default, created files are not given the exact permissions provided in the mode argument to open
+ mask is applied that automatically shuts off certain permissions
+ applied with bitwise negation on the mask, then bitwise anding it to the mode  
	+ new_permissions = ~mask &amp; mode
+ default mask is 022, which shuts off write permissions for group and other  
```
umask( <MASK> );  
umask(0000);
```
+ define umask using a 3 digit octal #

**lseek** - &lt;unistd.h&gt;
+ set the current position
```
lseek( <FILE_DESCRIPTOR>, <OFFSET>, <WHENCE> )
```
+ offset
	+ number of bytes to move the position by
	+ can be negative
+ whence
	+ where to measure offset from
	+ SEEK_SET
		+ offset is evaluated from beginning of file
	+ SEEK_CUR
		+ offset is relative to current position in file
	+ SEEK_END
		+ offset is evaluated from end of file
+ returns number of bytes the current position is from the beginning of the file, or -1 (errno)
