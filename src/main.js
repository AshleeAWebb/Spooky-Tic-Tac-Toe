// Global Variables
var player1 = new Player(1, "👻");
var player2 = new Player(2, "🎃");
var currentPlayer = player1;
var startingPlayer = player1;
var currentGame = new Game();

// Query Selectors
var box0 = document.querySelector("#zero");
var box1 = document.querySelector("#one");
var box2 = document.querySelector("#two");
var box3 = document.querySelector("#three");
var box4 = document.querySelector("#four");
var box5 = document.querySelector("#five");
var box6 = document.querySelector("#six");
var box7 = document.querySelector("#seven");
var box8 = document.querySelector("#eight");
var winnerAnnouncement = document.querySelector(".secondary-title");
var numberOfWinsPlayer1 = document.querySelector(".player-one-win");
var numberOfWinsPlayer2 = document.querySelector(".player-two-win");
var audio = document.getElementById("spookyMusic");


// Event Listeners
box0.addEventListener("click", function () {
    addPlayerToken(0, currentGame);
});
box1.addEventListener("click", function () {
    addPlayerToken(1, currentGame);
});
box2.addEventListener("click", function () {
    addPlayerToken(2, currentGame);
});
box3.addEventListener("click", function () {
    addPlayerToken(3, currentGame);
});
box4.addEventListener("click", function () {
    addPlayerToken(4, currentGame);
});
box5.addEventListener("click", function () {
    addPlayerToken(5, currentGame);
});
box6.addEventListener("click", function () {
    addPlayerToken(6, currentGame);
});
box7.addEventListener("click", function () {
    addPlayerToken(7, currentGame);
});
box8.addEventListener("click", function () {
    addPlayerToken(8, currentGame);
});

// Functions
function updateBoard() {
    var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerText = currentGame.gameBoard[i];
    }
}

function addPlayerToken(position, currentGame) {
    if (!currentGame.gameBoard[position]) {
        currentGame.playGame(position);
        updateBoard(position);
        switchPlayer();
        updateWinner(currentGame);
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    winnerAnnouncement.innerText = `it's ${currentPlayer.token}'s turn!`;
}

function resetPlayer() {
    currentPlayer = startingPlayer === player1 ? player2 : player1;
    winnerAnnouncement.innerText = `it's ${currentPlayer.token}'s turn!`;
}

function updateWinner(currentGame) {
    var winningPlayer = currentPlayer === player1 ? player2 : player1;
    if (currentGame.winConditions()) {
        winningPlayer.winCounter();
        if (winningPlayer === player1) {
            numberOfWinsPlayer1.innerHTML = `${player1.wins}`;
            winnerAnnouncement.innerText = `${player1.token} is the winner!`;
        } else {
            numberOfWinsPlayer2.innerHTML = `${player2.wins}`;
            winnerAnnouncement.innerText = `${player2.token} is the winner!`;
        }
        startingPlayer = currentPlayer === player1 ? player2 : player1;
        setTimeout(() => {
            currentGame.clearBoard();
            resetPlayer();
        }, 2000);
    } else if (!currentGame.gameBoard.includes(null)) {
        winnerAnnouncement.innerText = `It's a draw!`;
        setTimeout(() => {
            currentGame.clearBoard();
            resetPlayer();
        }, 2000);
    }
}

