$(document).ready(initializeApp);

var playerTurn = 1;

function initializeApp(){
    clickHandler();
    var player1 = new Player('John');
    var player2 = new Player('Susie');
}

function clickHandler(){
    $('.gameboard > div').click(processClick);
    $(".gameboard > div").hover(showFauxToken, hideFauxToken);
}

function processClick(){
    var that = this;
    //update board array with new position
    //once we update location of array we also check win condition and player
    updateBoardSquare(that);
    locationUpdate(that);
    // update board square visual
}

function updateBoardSquare(that){

    if(playerTurn === 1){
        $(that).css('background-color', 'green')
    } else{
        $(that).css('background-color', 'yellow')
    }
}
function locationUpdate(that){
    console.log('i have been clicked');

    var classes = $(that).attr('class');
    var column = classes.charAt(6);
    var row = classes.charAt(11)
    var currentPlayer = playerTurn;

    console.log('column: ' + column);
    console.log('row: ' + row);
    console.log('current player: ' + currentPlayer);
     updateBoardArray(row, column, currentPlayer);

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
    console.log('we changed player and player is', playerTurn);
}

//version 1.0

function showFauxToken(){
    var currentHoveredClass = $(this).attr('class');
    var currentColumn = currentHoveredClass.substr(0,7);
    var hoverSelector = ".tokenHoverContainer ." + currentColumn + " img"
    $(hoverSelector).css('display', 'inline-block');
    console.log("I should be showing now");
}

function hideFauxToken(){
    var currentHoveredClass = $(this).attr('class');
    var currentColumn = currentHoveredClass.substr(0,7);
    var hoverSelector = ".tokenHoverContainer ." + currentColumn + " img"
    $(hoverSelector).css('display', 'none');
    console.log("I should be hidden now");
}