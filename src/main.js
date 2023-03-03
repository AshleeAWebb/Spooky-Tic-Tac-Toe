var player1 = new Player(1, "🎃");
var player2 = new Player(2, "👻");
var currentPlayer = player1; 

var box1 = document.querySelector('#one');
var box2 = document.querySelector('#two');
var box3 = document.querySelector('#three');
var box4 = document.querySelector('#four');
var box5 = document.querySelector('#five');
var box6 = document.querySelector('#six');
var box7 = document.querySelector('#seven');
var box8 = document.querySelector('#eight');
var box9 = document.querySelector('#nine');
var winnerAnnouncement = document.querySelector('.secondary-title');
var numberOfWinsPlayer1 = document.querySelector('.player-one-win');
var numberOfWinsPlayer2 = document.querySelector('.player-two-win');

box1.addEventListener('click', addPlayerToken);
box2.addEventListener('click', addPlayerToken);
box3.addEventListener('click', addPlayerToken);
box4.addEventListener('click', addPlayerToken);
box5.addEventListener('click', addPlayerToken);
box6.addEventListener('click', addPlayerToken);
box7.addEventListener('click', addPlayerToken);
box8.addEventListener('click', addPlayerToken);
box9.addEventListener('click', addPlayerToken);

function addPlayerToken() {
    if (!this.textContent) { 
      this.textContent = currentPlayer.token; 
      switchPlayer(); 
      updateWinner();
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

function updateWinner() {
    if (game.winConditions()) {
        if (currentPlayer === player1) {
            player1.winCounter();
            numberOfWinsPlayer1.innerHTML = `Wins: ${player1.wins}`;
            winnerAnnouncement.innerText = `${player1.token} is the winner!`
        } else {
            player2.winCounter();
            numberOfWinsPlayer2.innerHTML = `Wins: ${player2.wins}`;
            winnerAnnouncement.innerText = `${player2.token} is the winner!`
        }
        game.clearBoard(); 
    }
}