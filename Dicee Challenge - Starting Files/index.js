var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice = "dice"+randomNumber1+".png";
var randomImageSource ="images/"+ randomDice;

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDice2 = "dice"+randomNumber2+".png";
var randomImageSource2 ="images/"+ randomDice2;
document.getElementsByClassName("img1")[0].src=randomImageSource;
document.getElementsByClassName("img2")[0].src=randomImageSource2;

document.querySelector("h1")


//if rn1 == rn2, "It's a Draw"
if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML ="It's a Draw";

}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Play 1 Wins";
}
// if rn2 > rn1, "Play 2 Win"
else{
    document.querySelector("h1").innerHTML="Play 2 Wins";
}

//if randomNumber1 > randomNumber2 Pl, "Play 1 Win"