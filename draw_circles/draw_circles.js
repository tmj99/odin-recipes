const drawButton = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const HEIGHT = document.documentElement.clientHeight;
const WIDTH = document.documentElement.clientWidth;

canvas.height = HEIGHT;
canvas.width = WIDTH;

function random( number ){
	return Math.floor( Math.random() * number );
}

function drawCircles() {
	let numberCircles = prompt("No. of circles: ", 1);
	ctx.clearRect(0,0,WIDTH,HEIGHT);
	for (let i = 0; i < numberCircles; i++) {
		ctx.beginPath();
		ctx.fillStyle = "rgba(255,0,0,0.5)";
		ctx.arc(random(WIDTH),random(HEIGHT),random(50),0,2*Math.PI);
		ctx.fill();
	}
}

drawButton.addEventListener('click',drawCircles);

// function draw() {
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgba(255,0,0,0.5)";
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }