//random 1-6

//Player 01 setup
var randomNum1 = Math.floor(Math.random()*6)+1;
//mapping random to images in folder
var randomImage1 = "images/dice" + randomNum1 + ".png";
var image1=document.querySelectorAll("img")[0]; //player 1
image1.setAttribute("src",randomImage1);

//Player 02 setup

var randomNum2 = Math.floor(Math.random()*6)+1;
//mapping random to images in folder
var randomImage2 = "images/dice" + randomNum2 + ".png";
var image2=document.querySelectorAll("img")[1]; //player 2
image2.setAttribute("src",randomImage2);

//player 03
var randomNum3 = Math.floor(Math.random()*6)+1;
//mapping random to images in folder
var randomImage3 = "images/dice" + randomNum3 + ".png";
var image3=document.querySelectorAll("img")[2]; //player 3
image3.setAttribute("src",randomImage3);

//main logic-decide will winner

if(randomNum1>randomNum2)
{
  document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomNum2>randomNum1)
{
document.querySelector("h1").innerHTML="player2 wins";
}
else
{
document.querySelector("h1").innerHTML="player3 wins";
}