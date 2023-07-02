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

// const originals = [1,2,3];
// let doubles = originals.map( item => item*2 );
// console.log(doubles);

const textBox = document.querySelector("#keyLogger");
const outputText = document.querySelector("#keyLoggerOutput");

textBox.addEventListener("keydown", (event) =>{
	outputText.textContent = `You pressed ${event.key}!`;
}
)


// The following section is a test of functions

// Question 3

var addTwoNumbers = function(l1, l2) {
    const newArray = [];
    for (let i = 0; i + 1 < l1.length; i++){
        var y = l1[i]+l2[i];
        if (y>9){
            newArray.push(y-10);
        } else {
            newArray.push(y);
        }
    }
};