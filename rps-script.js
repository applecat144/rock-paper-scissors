function main() {

    alert("Welcome to rock paper scissors ! It's a BO5 against the computer !");

    let replay = "N";

    do {
        let computerChoice = ""
            , playerChoice = ""
            , winLose = 0
            , winLoseMessage = ""
            , playerScore = 0
            , computerScore = 0;

        do {
            computerChoice = getComputerChoice();
            playerChoice = getPlayerChoice();
            winLose = round(computerChoice, playerChoice);

            winLose === 0 ? winLoseMessage = "you lose !" : winLose === 1 ? winLoseMessage = "it's a draw !" : winLoseMessage="you win !";

            roundResult(winLoseMessage, computerChoice, playerChoice);

            if (winLose === 2) {
                playerScore++;
            } else if (winLose === 0) {
                computerScore++;
            }

            console.log("PLayer : "+playerScore+"-"+computerScore+" : Computer");

        } while (playerScore < 3 && computerScore < 3);

        if (computerScore === 3) {
            alert("You lost :(");
        } else {
            alert("You won !");
        }

        replay = prompt("Want to replay ?", "N");
    } while (replay === "Y");
}

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);

    switch (random) {

        case 1: return "ROCK";
            break;

        case 2: return "PAPER";
            break;

        case 3: return "SCISSORS";
            break;
    }
}

function getPlayerChoice() {

    let rerunController = 0;

    do {
        
            let playerChoice = prompt("Choose your weapon !", "");

        playerChoice = playerChoice.toUpperCase();

        if (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") {

            alert("You need to pick one between rock, paper and scissors. Pay attention to typos !");
            rerunController = 1;

        } else return playerChoice;
    } while (rerunController === 1);
}

function round(computerChoice, playerChoice) {

    switch(computerChoice) {

        case "ROCK":
            
            switch(playerChoice) {

                case "ROCK": return 1;
                break;

                case "PAPER": return 2;
                break;

                case "SCISSORS": return 0;
                break;
            };
        break;
        
        case "PAPER":
            
            switch(playerChoice) {

                case "ROCK": return 0;
                break;

                case "PAPER": return 1;
                break;

                case "SCISSORS": return 2;
                break;
            };
        break;

        case "SCISSORS":
            
            switch(playerChoice) {

                case "ROCK": return 2;
                break;

                case "PAPER": return 0;
                break;

                case "SCISSORS": return 1;
                break;
            };
        break;
        
    }
}

function roundResult(winLoseMessage, computerChoice, playerChoice) {

    alert("You played " + playerChoice.toLowerCase() + " ! Computer played " + computerChoice.toLowerCase() + " ! " + winLoseMessage + "");
}

main();