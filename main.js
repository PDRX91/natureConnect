$(document).ready(initializeApp);

var playerTurn = 1;

function initializeApp(){
    clickHandler();
    var player1 = new Player('John');
    var player2 = new player1('Susie');
}

function clickHandler(){
    $('.gameboard > div').click(getLocation);
}

function getLocation(){
    if(playerTurn === 1){
        $(this).attr('background-color', 'green')
    } else{
        $(this).attr('background-color', 'yellow')
    }
    var classes = $(this).attr('class');
    var column = classes.charAt(6);
    var row = classes.charAt(11)
    var currentPlayer = playerTurn;
    updateBoardArray(row, column, currentPlayer);
}

class Player{
    constructor(name){
        this.name = name || 'Player 1'
    }
    
}