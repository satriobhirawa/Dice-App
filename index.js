var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;
//select by class

var img1 = document.querySelector(".img1");
img1.setAttribute("src",randomImageSource);

var img2 = document.querySelector(".img2");
img2.setAttribute("src", randomImageSource2);

var winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
  winner.innerHTML = "PLAYER 1 WIN!"
}else if (randomNumber1 === randomNumber2) {
  winner.innerHTML = "TIE!"
}else {
  winner.innerHTML = "PLAYER 2 WIN!"
}
