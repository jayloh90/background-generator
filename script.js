var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function randomColorGenerator() {
	var color = "rgba("+ getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomInt(0,255)+ ",0.5)";
	return color;
}

function setRandomGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ randomColorGenerator() 
	+ ","
	+ randomColorGenerator()
	+ ")"

	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();

button.addEventListener("click", setRandomGradient);