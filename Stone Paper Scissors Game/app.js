let userScore = 0;
let compScore = 0;
let drawScore = 0;
let matchCount = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");
const matchCountHead = document.querySelector("#match-count");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["stone","paper","scissors"]
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
};

const drawGame = () =>{
    drawScore ++
    drawScorePara.innerText = drawScore
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#ffa447";
    }
    else{
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#d24545";
    }
}

const playGame = (userChoice) =>{
    //Generate computer choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice==="paper"){
            // scissors, stone
            userWin =  compChoice === "scissors" ? false : true;
        }
        else{
            // stone, paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        matchCount ++
        matchCountHead.innerText = "Match Count: " + matchCount;
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
