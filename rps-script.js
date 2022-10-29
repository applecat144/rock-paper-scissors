let playerScore = 0
    , computerScore = 0;

let btns = document.querySelectorAll('.buttons button');

btns.forEach(whichButton); // for each button, assign a listener

function whichButton(button) {
    button.addEventListener('click', match);
}

function match(e) { 
    
    // when triggered, draw a random computer choice and match
    // it with player choice

    let playerChoice = e.srcElement.className;
    let computerChoice = getComputerChoice();

    let winLose = round(computerChoice, playerChoice);

    if (winLose === 2) {
        playerScore++;
        document.querySelector('.player-score').textContent = playerScore;
    } else if (winLose === 0) {
        computerScore++;
        document.querySelector('.computer-score').textContent = computerScore;
    }

    checkForEnd(playerScore, computerScore); // if one score is 3, end the game.

}

function checkForEnd(playerScore, computerScore) {
    if (playerScore > 2 || computerScore > 2) {
        btns.forEach( (button) => { button.setAttribute('class', '')});
    }
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

function round(computerChoice, playerChoice) {

    switch (computerChoice) {

        case "ROCK":

            switch (playerChoice) {

                case "ROCK": return 1;
                    break;

                case "PAPER": return 2;
                    break;

                case "SCISSORS": return 0;
                    break;
            };
            break;

        case "PAPER":

            switch (playerChoice) {

                case "ROCK": return 0;
                    break;

                case "PAPER": return 1;
                    break;

                case "SCISSORS": return 2;
                    break;
            };
            break;

        case "SCISSORS":

            switch (playerChoice) {

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