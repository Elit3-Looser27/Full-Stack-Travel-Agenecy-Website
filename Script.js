
const squares = document.querySelectorAll(".square");
const answerDsiplay = document.querySelector(".correct");
const colorDisplay = document.querySelector("h1");
const button = document.querySelector(".new");
const button_h = document.querySelector(".hard");
const button_e = document.querySelector(".easy");
const correct = document.getElementsByClassName("header")
let colors = [];
var diff = 6; 
GenerateRandomColors();
assign_colors();
CheckColor();
function GenerateRandomColors(){
	for(let i = 0; i < diff; i++){
		colors.push(
			`RGB(${Math.floor(Math.random() *255)},
			${Math.floor(Math.random() *255)},
			${Math.floor(Math.random() *255)})`
		);
		
	}
}
	
 function assign_colors(){
	colors.forEach((color,index) => {
 		squares[index].style.background = color;
 		squares[index].setAttribute("data-color",color)
 	});
}
function getRandomPickedColor(){
	var randomColor = colors[Math.floor(Math.random()*colors.length)];
	colorDisplay.textContent = randomColor;
	return randomColor;
}
function CheckColor(){
	squares.forEach(square => {
		square.addEventListener("click", e => {
			if(e.target.dataset.color === pickedColor){
			answerDsiplay.textContent = "Correct :) !"
			for(let i = 0; i < diff; i++){
				
				squares[i].classList.remove("fade")
				squares[i].style.background = pickedColor
			}	
			}
			else{
				answerDsiplay.textContent = "Wrong :( "
				e.target.classList.add("fade")
		
			}
		})
	})
}
let pickedColor = getRandomPickedColor();
function reset(){
	colors = []
	GenerateRandomColors();
	squares.forEach(square => square.classList.remove("fade"));
	assign_colors();
	CheckColor();
	pickedColor = getRandomPickedColor();
}
function easy(){
	button_e.forEach(easy => easy.classList.remove(""))
}
button.addEventListener("click",reset);
button_e.addEventListener("click",function (){
	for( let i = 3; i < 6; i++){
		squares[i].style.display = "none"
	}
	diff = 3;
	reset();
});
button_h.addEventListener("click",function (){
	for( let i = 3; i < 6; i++){
		squares[i].style.display = "block"
	
	}
	diff = 6;
	reset();
});