var pg = document.getElementById("playground");
var ctx = pg.getContext("2d");

var lastX = 0;
var lastY = 0;
var numDot = 0;

var addDot = function addDot(x, y, color) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(x,y,15,0,2*Math.PI);
	ctx.fill();
	if (numDot != 0) {
		ctx.moveTo(x,y);
		ctx.lineTo(lastX,lastY);
	}
	ctx.stroke();
	lastX = x;
	lastY = y;
	numDot += 1;
};

var cList = ["#F28","#8F2","#28F"];
pg.addEventListener("click", function() {
	console.log("pg clicked");
	addDot(event.offsetX, event.offsetY, cList[numDot%3]);
});

var clear = document.getElementById("clear");
clear.addEventListener("click", function(e) {
	console.log("clear clicked");
	e.preventDefault();
	ctx.clearRect(0, 0, 500, 500);
	numDot = 0;
});
