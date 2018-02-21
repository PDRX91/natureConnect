$(document).ready(initializeApp);

var playerTurn = 1;

function initializeApp(){
    clickHandler();
    var player1 = new Player('John');
    var player2 = new Player('Susie');
}

function clickHandler(){
    $('.gameboard > div').click(getLocation);
}

function getLocation(){
    console.log('i have been clicked');
    if(playerTurn === 1){
        $(this).css('background-color', 'green')
    } else{
        $(this).css('background-color', 'yellow')
    }
    var classes = $(this).attr('class');
    var column = classes.charAt(6);
    var row = classes.charAt(11)
    var currentPlayer = playerTurn;

    console.log('column: ' + column);
    console.log('row: ' + row);
    console.log('current player: ' + currentPlayer);
    // updateBoardArray(row, column, currentPlayer);

}

class Player{
    constructor(name){
        this.name = name || 'Player 1';
    }
}


function changePlayer(){
    if(playerTurn === 1){
        playerTurn = 2;
    } else{
        playerTurn = 1;
    }
}
