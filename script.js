'use strict';

//adding functionality to dice
const dice = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");

//initializing the first player as 0.
let player = 0;

//score and highscore function
let score = (initialScore,newScore) => initialScore+newScore;


//click roll dice button to roll the dice
let diceFunction = function () {
	let currentScore = document.querySelector(`#current--${player}`);
	//dice value
	let diceValue = Math.trunc(Math.random()*6)+1;
	//dice image
	dice.src = `dice-${diceValue}.png`;
	//Score setting
	if(diceValue===1){
		currentScore.textContent = "0";
		//game control passed to other player
		player = Number(!player);

		//changing the css style by toggling class player--active which gives highlight to active player.
		document.querySelector(".player--0").classList.toggle("player--active");
		document.querySelector(".player--1").classList.toggle("player--active");
	}
	else
		currentScore.textContent = score(Number(currentScore.textContent),diceValue);
}
rollDiceBtn.addEventListener('click',diceFunction);

//hold button functionality
const holdBtn = document.querySelector(".btn--hold");

let holdFunction = function(){
	//highScore setting
	let highScore = document.querySelector(`#score--${player}`);
	let currentScore = document.querySelector(`#current--${player}`);
	highScore.textContent = Number(highScore.textContent)<Number(currentScore.textContent) ? currentScore.textContent:highScore.textContent;
	//winner settings
	if(Number(highScore.textContent) >=100){
		document.querySelector(`.player--${player}`).classList.add("player--winner");
		document.querySelector(".modal").classList.remove("hidden");
		document.querySelector(".overlay").classList.remove("hidden");
		document.querySelector("#winner").textContent = `Player ${player+1} wins!!!! Congratulations!!!`;
		
	}else{
	//game control passed to other player
	player = Number(!player);

	//changing the css style by toggling class player--active which gives highlight to active player.
	document.querySelector(".player--0").classList.toggle("player--active");
	document.querySelector(".player--1").classList.toggle("player--active");	
	}
}
holdBtn.addEventListener('click', holdFunction);


//new game button functionality
const newGame = function(){
	document.querySelector(`.player--${player}`).classList.remove("player--winner");
	document.querySelector(".player--0").classList.add("player--active");
	document.querySelector(".player--1").classList.remove("player--active");
	player = 0;
	let highScore1 = document.querySelector(`#score--0`);
	let currentScore1 = document.querySelector(`#current--0`);
	let highScore2 = document.querySelector(`#score--1`);
	let currentScore2 = document.querySelector(`#current--1`);
	highScore1.textContent = "0";
	currentScore1.textContent = "0";
	highScore2.textContent = "0";
	currentScore2.textContent = "0";
}

const newGameBtn = document.querySelector(".btn--new");
newGameBtn.addEventListener('click', newGame);
	document.querySelector(".overlay").addEventListener('click',newGame);
	document.querySelector(".overlay").addEventListener('click',function() {
	document.querySelector(".modal").classList.add("hidden");
	document.querySelector(".overlay").classList.add("hidden");
});


