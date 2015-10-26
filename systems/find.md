### AIM: Seek and ye shall find.

**umask** - &lt;sys/stat.h&gt;  
+ set the file creation permission mask
+ by default, created files are not given the exact permissions provided in the mode argument to open
+ mask is applied that automatically shuts off certain permissions
+ applied with bitwise negation on the mask, then bitwise anding it to the mode  
	+ new_permissions = ~mask &amp; mode
+ default mask is 022, which shuts off write permissions for group and other  
umask( &lt;MASK&gt; );  
+ define umask using a 3 digit octal #
