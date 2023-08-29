var randomnumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomnumber1+".png";
var randomImageSouce="images/"+randomDiceImage;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSouce);



var randomnumber2=Math.floor(Math.random()*6)+1;
var randomImageSouce2="images/"+"dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSouce2);


// ---------------Condition For Win/Lose
if(randomnumber1>randomnumber2){
    document.querySelector("h2").textContent="🚩 Player 1!";
}
else if(randomnumber1===randomnumber2){
    document.querySelector("h2").innerHTML="Draw";
}
else{
    document.querySelector("h2").textContent="🚩 Player 2!!";
}
