class Game{
    constructor(){
        this.gameBoard = new Array(9).fill(null);
        this.currentPlayer = "🎃";
        this.winner = false;
    }

    playGame(index) {
        if (!this.winConditions() && this.gameBoard[index] === null) {
            this.gameBoard[index] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === "🎃" ? "👻" : "🎃"
            updateWinner();
        }
    }

    winConditions() {
        var winLineUp =[[1, 5, 9], 
        [2, 5, 8], 
        [3, 6, 9],
        [1, 4, 7],
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [7, 5, 3]
        ];
        for (var i =0; i < winLineUp.length; i++) {
        var [a, b, c ] = winLineUp[i];
        if (this.gameBoard[a] && this.gameBoard[a]===this.gameBoard[b] && this.gameBoard[a] === this.gameBoard[c]) {
            return true;
        }
    }
     if(!this.board.includes(null)) {
        return true;
     }
     return false;
     }   

    clearBoard() {
        this.gameBoard = new Array(9).fill(null);
        this.currentPlayer = "🎃"
        this.winner =false;

    }
}var game = new Game();