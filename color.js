var numOfSq = 6;
var colors = [];
var pickedColor;

var sqs = document.querySelectorAll(".square");
var cd = document.querySelector("#colorDisplay");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetB = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	setUpButtons();
	setUpSqaures();
	reset();
}

function setUpButtons(){
	// mode buttons event listener
	for(var i = 0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSq = 3 : numOfSq = 6;
			reset();
		});
	}
}

function setUpSqaures(){
	// square event listener
	for(var i=0; i<sqs.length; i++){
		//add click listeners to squares
		sqs[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				msg.textContent = "CORRECT!"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				reset.textContent = "Play Again?";
			}else {
				this.style.background = "#232323";
				msg.textContent = "Try Again"
			}
		});
	}
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numOfSq = 3

// 	colors = generateRandomColors(numOfSq);
// 	pickedColor = pickColor();
// 	cd.textContent = pickedColor;

// 	for(var i =0; i < sqs.length; i++){
// 		if(colors[i]){
// 			sqs[i].style.background = colors[i];
// 		}else{
// 			sqs[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfSq = 6;

// 	colors = generateRandomColors(numOfSq);
// 	pickedColor = pickColor();
// 	cd.textContent = pickedColor;

// 	for(var i =0; i < sqs.length; i++){
	
// 		sqs[i].style.background = colors[i];
// 		sqs[i].style.display = "block";
	
// 	}
// });

function reset(){
	colors = generateRandomColors(numOfSq);
	pickedColor = pickColor();
	cd.textContent = pickedColor;
	reset.textContent = "New Colors";
	msg.textContent = "";

	for(var i=0; i<sqs.length; i++){
		if(colors[i]){
			sqs[i].style.display = "block";
			sqs[i].style.background = colors[i];
		}else{
			sqs[i].style.display = "none";
	}
	h1.style.background = "steelblue";
	}
}

resetB.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	// loop thru each squares
	for(var i=0; i<sqs.length; i++){
		sqs[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for(var i=0; i < num; i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	//pick a green from 0-255
	//pick a blue from 0-255
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}