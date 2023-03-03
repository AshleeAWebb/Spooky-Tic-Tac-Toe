var player1 = new Player(1, "👻");
var player2 = new Player(2, "🎃");
var currentPlayer = player1;

var game = new Game();

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

box0.addEventListener("click", function () {
    addPlayerToken(0, game);
});
box1.addEventListener("click", function () {
    addPlayerToken(1, game);
});
box2.addEventListener("click", function () {
    addPlayerToken(2, game);
});
box3.addEventListener("click", function () {
    addPlayerToken(3, game);
});
box4.addEventListener("click", function () {
    addPlayerToken(4, game);
});
box5.addEventListener("click", function () {
    addPlayerToken(5, game);
});
box6.addEventListener("click", function () {
    addPlayerToken(6, game);
});
box7.addEventListener("click", function () {
    addPlayerToken(7, game);
});
box8.addEventListener("click", function () {
    addPlayerToken(8, game);
});


function updateBoard() {
  box0.innerText = game.gameBoard[0];
  box1.innerText = game.gameBoard[1];
  box2.innerText = game.gameBoard[2];
  box3.innerText = game.gameBoard[3];
  box4.innerText = game.gameBoard[4];
  box5.innerText = game.gameBoard[5];
  box6.innerText = game.gameBoard[6];
  box7.innerText = game.gameBoard[7];
  box8.innerText = game.gameBoard[8];
}

function addPlayerToken(index, game) {
    if (!game.gameBoard[index]) { 
      game.playGame(index);
      updateBoard(index);
      switchPlayer(); 
      updateWinner(game);
    }
}


function switchPlayer() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    winnerAnnouncement.innerText = `it's ${player2.token}'s turn!`
  } else {
    currentPlayer = player1;
    winnerAnnouncement.innerText = `it's ${player1.token}'s turn!`
  }
}

function updateWinner(game) {
    var winningPlayer = currentPlayer === player1 ? player2 : player1;
    
    if (game.winConditions()) {
      winningPlayer.winCounter();
      
      if (winningPlayer === player1) {
        numberOfWinsPlayer1.innerHTML = `${player1.wins}`;
        winnerAnnouncement.innerText = `${player1.token} is the winner!`
        console.log("Player 1 wins!");
      } else {
        numberOfWinsPlayer2.innerHTML = `${player2.wins}`;
        winnerAnnouncement.innerText = `${player2.token} is the winner!`
        console.log("Player 2 wins!");
      }
      
      game.clearBoard(); 
    } else if (!game.gameBoard.includes(null)) {
      winnerAnnouncement.innerText = `It's a draw!`;
      console.log("It's a draw!");
      game.clearBoard(); 
    }
  }
