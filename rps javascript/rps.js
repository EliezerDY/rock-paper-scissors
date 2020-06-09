var userScore=0;
var compScore=0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['Rock', 'Paper', 'Scissor'];
	const randomNumber =Math.floor(Math.random() * 3);
	return choices[randomNumber];
}


function win(userChoice, computerChoice) {
	userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + " you win!";

}
function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = computerChoice + " beats " + userChoice + " you lose!";
}
function draw(userChoice, computerChoice) {

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = userChoice + " equals " + computerChoice + " its a draw!";
}

function game(userChoice){
    const computerChoice =getComputerChoice();
    switch (userChoice + computerChoice) {
    	case  "RockScissor":
    	case  "PaperRock":
    	case  "ScissorPaper":
    	 win(userChoice, computerChoice);
    	  break;
    	 case  "RockPaper":
    	 case  "PaperScissor":
    	 case  "ScissorRock":
    	  lose(userChoice, computerChoice);
    	  break;
    	 case  "RockRock":
    	 case   "PaperPaper":
    	 case   "ScissorScissor":
    	   draw(userChoice, computerChoice);
    	  break;
    }
}


function main(){
	rock_div.addEventListener('click', function() {
		game("Rock");
	})
	paper_div.addEventListener('click', function() {
		game("Paper");
	})
	scissors_div.addEventListener('click', function() {
		game("Scissor");
	})
}

main();
