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
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("draw! You both picked rock.")
        console.log("Your score: " + humanScore + ", Computer Score: " + computerScore)}

else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Rock gets owned by paper.");
computerScore += 1;
console.log("Your score: " + humanScore + ", Computer Score: " + computerScore)}

else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock crushes scissors.");
humanScore += 1;
console.log("Your score: " + humanScore + ", Computer Score: " + computerScore)}    

else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("draw! You both picked paper.");
    console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
}

else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Paper gets cut by scissors.");
computerScore += 1;
console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);}    

else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper owns rock.");
humanScore += 1;
console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);}

else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("draw! You both picked scissors.");
    console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
}    

else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Scissors gets crushed by rock.");
computerScore += 1;
console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);}   

else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors cut paper.");
    humanScore += 1;
    console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
}    

}



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
function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())};
        if (humanScore > computerScore) {
            alert("You win!");}
            else { 
                alert("You lose!")}
    
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
 
