let userScore = 0;
let compScore = 0;

choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"]; 
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw.play again";
};

const showWinner = (userWin) => {
   if(userWin) {
    console.log("Youu Win!");
    msg.innerText = "Youu Win!";
   } else {
    console.log("You lose");
    msg.innerText = "Youu lose!";
   }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //generate commputer choice
    const compChoice = genCompChoice();
    console.log("comp Choice = ",compChoice);

    if(userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            compChoice === "paper"
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock scissors
            compChoice === "scissors" ? false : true;
        } else {
            //rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
