/*get computer choice, use math random ?*/
function getComputerChoice() {
    let x = Math.random();


/*
when mathrandom is < 0.33, rock
*/
    if (x <= 0.33) {
        return "rock"
    }
/*
when mathrandom is 0.33 <= x <= 0.67, paper
*/

    else if (x > 0.33 && x <= 0.66) { return "paper"}


/*when mathrandom is 0.67 < x <= 1, scissors
*/
    else {return "scissors"}

    }
/*
assign result to computer choice,
*/




/*get human choice with prompt, 
*/
function getHumanChoice() {
    return prompt("Choose Your Weapon", "Rock/Paper/Scissors").toLowerCase();

}
/*
assign result to human choice
*/

  

/*human score 0, computer score 0*/
let humanScore = 0;
let computerScore = 0;
/* when round starts, 
check
*/
function playRound(humanChoice, computerChoice) {
    /*remove hidden class from results to display results*/
    
    results.classList.remove("hidden");
    if (humanChoice === computerChoice) {
        results.textContent = ''
        results.textContent = `Draw! You both picked ${humanChoice}.\r\n`
    
    }
        /*console.log(`draw! You both picked ${humanChoice}.`)
        console.log("Your score: " + humanScore + ", Computer Score: " + computerScore)}
        */
    else if (humanChoice === "rock" && computerChoice === "paper") {
    
    computerScore += 1;
    results.textContent = '';
    results.textContent = "You lose! Rock gets owned by paper.\r\n";

    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    results.textContent = ''
    results.textContent += "You win! Rock crushes scissors.\r\n";
   
    }    

    

    else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;   
    results.textContent = ''
    results.textContent += 'You lose! Paper gets cut by scissors.\r\n'
    }    

    else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    results.textContent = '';
    results.textContent += "You win! Paper owns rock.\r\n";
  
    }

 

    else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    results.textContent = ''
    results.textContent = "You lose! Scissors get crushed by rock."
    }   

    else if (humanChoice === "scissors" && computerChoice === "paper") {

   
    humanScore += 1;
    results.textContent = '';
    results.textContent += "You win! Scissors cut paper.\r\n";
   
}    
    
    results.textContent += `Your score: ${humanScore}, Computer score: ${computerScore}\r\n`
    if (humanScore === 5) {results.textContent += "YOU WON THE GAME!";
        humanScore = 0;
        computerScore = 0;
    }

    else if (computerScore === 5) {results.textContent +="YOU LOST THE GAME!";
    humanScore = 0;
    computerScore = 0;
    }
    
    }

/*assign variable to the 3 choices buttons*/

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

/*assign a variable to the results div*/
const results = document.querySelector(".results");



/*each button plays a round with its respective human choice*/

/*if i directly add playRound(rock, getComputerChoice), i'm accidentally executing getComputerChoice().
instead, use a callback function like below*/

btnRock.addEventListener("click", function() {playRound("rock", getComputerChoice())});
btnPaper.addEventListener("click", 
(() => {
    playRound("paper", getComputerChoice())
}
)
);
btnScissors.addEventListener("click",(()=>{playRound("scissors", getComputerChoice())}))




/*
 if human rock computer rock, return draw, 
 if human rock computer scissors, return win, human score +1
 if human rock computer paper, return lose, computer score +1

 if human paper computer paper, return draw
 if human paper computer rock, return win, human score  +1
 if human paper computer scissors, return lose, computer score +1

 if human scissors computer scissors, return draw
 if human scissors computer paper, return win, human score +1
 if human scissors computer rock, return lose, computer score +1
 SHOW SCORE AFTER EACH ROUND
 */

 /*each game consists of 5 rounds*/
/*play game for 5 rounds
function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())};
        if (humanScore > computerScore) {
            alert("You win!");}
            else { 
                alert("You lose!")};
        humanScore = 0;
        computerScore = 0;
    
    
    }
 /*
 function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore) {
        alert("You win!");}
        else { 
            alert("You lose!")}
    }
*/
 
