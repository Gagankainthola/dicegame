var randomnumber1 = Math.random();
randomnumber1= randomnumber1*6;
randomnumber1 = Math.floor(randomnumber1)+1;
var randomimage = "dice" +randomnumber1 +  ".png";
var randomimagesource= "images/" + randomimage;
 
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

//now for second image

var randomnumber2 = Math.random();
randomnumber2= randomnumber2*6;
randomnumber2= Math.floor(randomnumber2)+1;
var randomimage2 = "dice" + randomnumber2 +  ".png";
var randomimagesource2= "images/" + randomimage2;

var image2 =  document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

//now winner check

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}