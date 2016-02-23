var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

/** fillStyle - sets the color to fill shapes */
//ctx.fillStyle = "#0000FF";

/** fillRect(xcor, ycor, w, h) - creates a filled in rectangle */
//ctx.fillRect(25,25,50,50);

/** strokeStyle - sets the color to draw strokes */
//ctx.strokeStyle = "#00FF00";

/** strokeRect(xcor, ycor, w, h) - creates a rectangle outline */ 
//ctx.strokeRect(10,10,80,80);

/** beginPath() - "puts down pen" to draw the following commands */
//ctx.beginPath();

/** moveTo(xcor, ycor) - moves position that commands draw from */
//ctx.moveTo(300,300);

/** lineTo(xcor, ycor) - draws line from pen position to given point */
//ctx.lineTo(50,10);

/** stroke() - draws out previous commands */
//ctx.stroke();

/** fill() - fills shapes defined by previous commands */
//ctx.fill();

/** arc(xcor, ycor, rad, ang1, ang2) - draws an arc of given radius between two angles */
//ctx.arc(100, 100, 50, 1, 2);

/** font - sets the font to add text */
//ctx.font = "30px Arial";

/** fillText(text, xcor, ycor) - add given text to canvas drawing */
//ctx.fillText("Peter Piper", 50,50);

/** closePath() - "lifts up pen" to stop drawing commands */
//ctx.closePath();

ctx.moveTo(30,30);
ctx.font = "50px Arial";

ctx.beginPath();
ctx.fillStyle = "#555555";
ctx.fillRect(0,0,200,500);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#FF0000";
ctx.arc(100,100,50,0,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#FFFF00";
ctx.arc(100,250,50,0,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#00FF00";
ctx.arc(100,400,50,0,2*Math.PI);
ctx.fill();
ctx.closePath();
