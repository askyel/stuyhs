functions should be no longer than one viewscreen and no wider than 80 characters

Javadoc pulls special documentation format into webpage

## Python Documentation

docstrings (triple quotes) under each function  
`$ help <FUNCTION NAME>`

```python  
def inc(x):
	"""
	return a value one more than the input
	"""
	return x+1
```

## C Documentation

```c

/*-------- mod.c ----------*/
/*
	description of file
	
	void f1(int x) -- brief descrption of function f1

	void f2(int a, int b) -- brief description of f2
*/

/*----- includes --------*/
#include <stdio.h>
#include <stdlib.h>
#include "mystuff.h"

/*--------- defines/globals ------*/
#define MYVAL 1;

/*--------- f1 ---------*/
/*
	Does something cool to parameter x
	params: x - an integer
	returns: void 
	AL timestamp
*/
void function f1(int x){
	/*doing something*/
}

/*-------- f2 --------------*/
/*
	Does something cool to parameter x
	params: a - an integer
		b - an integer
	returns: the sum of a + b
	AL timestamp
*/
int function f2(int a, int b) {
	return a + b;
}

```


