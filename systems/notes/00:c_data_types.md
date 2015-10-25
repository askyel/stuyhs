### AIM: Variables are the spice of life.

All C primitives are numeric.

	sizeof(<TYPE>) // finds size of specified type in bytes

Type | Standard Size (bytes)
--- | ---
int | 4
short | 2
long | 8
float | 4
double | 8
char | 1 

All boolean values are values.  
0 => false  
anything else => true

**Character literals** are single characters inside ''.  
e.g. 'a', '*'

**String literals** are arrays of characters.  
e.g. "hello"

Variable types declared as **unsigned** will not be negative.  
The lower bound of any unsigned variable is 0.  
The upper bound of any unsigned variable is greater than the signed version.  
e.g. unsigned char x;	sizeof(x) is between 0 and 255  
e.g. char x;		sizeof(x) is between -128 and 127


