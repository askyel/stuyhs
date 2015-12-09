# Javascript

## History

world's most popular programming language

combination of Java, Scheme, and Self

DotCom bubble: web failed as application delivery system (Java applets failed)

Ajax - revived the Internet (and Javascript)

functional language with dynamic objects (and familiar syntax)

event-driven application model

JSLint.com

Wat - Gary Bernhard

## Syntax

HTML  
```html
<script>
alert('hello');
</script>
```

in separate file  
```html
<script src="intro.js"></script>
```

style
```html
<style>
.red (color #ff0000;)
.green (color #00ff00;)
.blue (color #0000ff;)
</style>
```

```javascript
var x = 20;
var l = [10,20,30,"hello",30.3];
```

## Tips

Store function in variable for more flexibility.

## Functions

```javascript
document.getElementByTagName("h1");
``` 
returns items with h1 tag

```javascript
document.createElement("li");
``` 
creates li element

## Events

```javascript
var addMouseEvents = function(item){
	item.addEventListener('mouseover',function(e)){
		this.classList.toggle('blue')
	};
};
```
