const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector('#resultDisplay');
let compScore = 0;
let playerScore = 0;

function computerPlay(){
    let nombre =  Math.floor((Math.random() * 3) + 1);
    let play =""
    switch(nombre) {
        case 1:
            play = "Paper";
            break;
        case 2:
            play = "Rock";
            break;
        case 3 : 
            play = "Scissor";
            break;
    }
    return play;
}

function round(player, computer){
    let resultat = "";
    let win = ((player === "Paper") && (computer === "Rock")) || ((player === "Rock") && (computer === "Scissor")) || 
            ((player === "Scissor") && (computer === "Paper"));
    if (player === computer){
        resultat = "Draw !";
    }
    else if (win){
        resultat = "You win !";
        playerScore++;
    }
    else {
        resultat = "You lose !";
        compScore++;
    }
    return resultat;

}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let comp = computerPlay();
        let result = round(button.id, comp);
        let display = document.createElement('p');
        display.textContent = "Your opponent played " + comp  + ", " + result + ". Current score : " + playerScore + " - " + compScore;
        resultDisplay.appendChild(display);
    })
})

/*function game(){
    let i = 0;
    let scorePlayer = 0;
    let scoreComputer = 0;
    while (i<5){
        let computer = computerPlay();
        let player = prompt("What do you play ?");
        let result = round(player, computer);
        if (result === "You win !") {
            scorePlayer++;
        }
        else if (result === "You lose !"){
            scoreComputer++;
        }
        alert("Your oppenent played " + computer + ", " + result + " Current score : " + scorePlayer + "-" + scoreComputer);
        i++;
    }
    if (scorePlayer > scoreComputer){
        alert("Final score : " + scorePlayer + "-" + scoreComputer + ". Congratulations, you win !");
    }
    else if (scorePlayer === scoreComputer){
        alert("Final score : " + scorePlayer + "-" + scoreComputer + ". It's a Draw !");
    }
    else {
        alert("Final score : " + scorePlayer + "-" + scoreComputer + ". You lose. You'll do better next time !");
    }
}
game();*/

