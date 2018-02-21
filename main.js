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
    var row = classes.charAt(11);
    var currentPlayer = playerTurn;

    console.log('column: ' + column);
    console.log('row: ' + row);
    console.log('current player: ' + currentPlayer);
    var placementRow = updateBoardArray(row, column, currentPlayer);
     createToken(column, currentPlayer);
     moveToken(placementRow, column);
}

class Player{
    constructor(name){
        this.name = name || 'Player 1';
    }
}


function changePlayer(){
    if(playerTurn === 1){
        playerTurn = 2;
        $(".tokenHoverContainer img").attr('src', 'assets/token2.png')
    } else{
        playerTurn = 1;
        $(".tokenHoverContainer img").attr('src', 'assets/token1.png')

    }
    console.log('we changed player and player is', playerTurn);
}

//version 1.0

function showFauxToken(){
    var currentHoveredClass = $(this).attr('class');
    var currentColumn = currentHoveredClass.substr(0,7);
    var hoverSelector = "." + currentColumn + " img.faux"
    $(hoverSelector).css('display', 'inline-block');
}

function hideFauxToken(){
    var currentHoveredClass = $(this).attr('class');
    var currentColumn = currentHoveredClass.substr(0,7);
    var hoverSelector = "." + currentColumn + " img.faux"
    $(hoverSelector).css('display', 'none');
}

function winScreen(winner){
    var winBox = $("<div>").addClass('winBox').text('Player ' + winner + ' wins!');
    $('.gameContainer').append(winBox);
}