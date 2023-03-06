class Game {
    constructor() {
      this.gameBoard = new Array(9).fill(null);
      this.winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
    }
  
    playGame(position) {
      this.gameBoard[position] = currentPlayer.token;
    }
  
    winConditions() {
      for (let i = 0; i < this.winningConditions.length; i++) {
        var [a, b, c] = this.winningConditions[i];
        if (
          this.gameBoard[a] &&
          this.gameBoard[a] === this.gameBoard[b] &&
          this.gameBoard[b] === this.gameBoard[c]
        ) {
          return true;
        }
      }
      return false;
    }
  
    clearBoard() {
      this.gameBoard = new Array(9).fill(null);
      updateBoard();
    }
  }