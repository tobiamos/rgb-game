var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener('click', function(){
	this.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(var i=0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
});
hardBtn.addEventListener('click', function(){
	this.classList.add('selected');
	easyBtn.classList.remove('selected');
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(var i=0; i <squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
			h1.style.background = "steelblue";	
	}
});
resetButton.addEventListener('click', function(){
 this.textContent = "New Colors";
 colors = generateRandomColor(numSquares);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 messageDisplay.textContent = "";
 for(var i=0; i < squares.length; i++)
{
	//assign initial colors to squares;
	squares[i].style.background = colors[i];
	h1.style.background = "steelblue";
}

});
colorDisplay.textContent = pickedColor;
for(var i=0; i < squares.length; i++)
{
	//assign initial colors to squares;
	squares[i].style.background = colors[i];
	// add click event listeners to squares
	squares[i].addEventListener('click', function(){
	// grab color of clicked square
	var clickedColor = this.style.background;
	//compare color to picked color
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!!";
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		resetButton.textContent = 'Play Again';
	}
	else{
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}
function changeColors(color){
	for(i = 0; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr =[];

	for(var i=0; i<num; i++){
	arr.push(randomColor());

	}

	return arr;
}
function randomColor(){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}