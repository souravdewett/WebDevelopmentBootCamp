var secretNumber = 4;
var guess = Number(prompt("Guess a number"));
alert(guess);

if(Number(guess) === secretNumber){
	alert("You Got It Right");
}
else if (Number(guess) > secretNumber){
	alert("Too High, Guess Again!")
}

else if (Number(guess) < secretNumber){
	alert("Too Low, Guess Again");
}

else{
	alert("You Got It Right");
}