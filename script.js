// change title style when mouse moved on
var title = document.getElementsByClassName("title")[0];
function changeTitleStyle() {
  title.classList.toggle("title-event");
}
title.addEventListener("mouseover", changeTitleStyle);
title.addEventListener("mouseout", changeTitleStyle);
// ---------------------------------------------------
// change background colors from input
var css = document.querySelector("h3");
var color1 = document.getElementById("color-1");
var color2 = document.getElementById("color-2");
var body = document.getElementById("body");
body.style.background = "linear-gradient(to right, #ff0000, #ffff00)";
css.innerText = body.style.background + ";";

function changeGradient(){
  body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
  css.innerText = body.style.background + ";";
};
color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
//------------------------------------------------------
//set random colors
var b = document.querySelector("button");
function setRandomGradient(){
  var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  body.style.background = "linear-gradient(to right, #"+randomColor1+", #"+randomColor2+")";
  css.innerText = body.style.background + ";";
  b.style.backgroundColor = "#" + randomColor1;
  console.log(randomColor1+" "+randomColor2);
}
b.addEventListener("click", setRandomGradient);