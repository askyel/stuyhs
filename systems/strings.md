### AIM: Let's take this to delimit!

**strsep** - &lt;string.h&gt;  
used for parsing a string with a common delimeter 
'''c  
strsep( <SOURCE>, <DELIMETER> )
'''  
locates first occurrence of delimeter in string, replaces with NULL  
returns beginning of original string   
sets source string to string starting at 1 index past location of new NULL  
since source variable's value is changed, must be pointer to a string  
'''c
char line[100] = "wow-this-is-so-cool";  
*s1 = line; 
'''


