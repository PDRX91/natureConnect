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
    locationUpdate(that);
    // update board square visual
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
     moveToken(placementRow, column, currentPlayer);
}

class Player{
    constructor(name){
        this.name = name || 'Player 1';
    }
}


function changePlayer(){
    if(playerTurn === 1){
        playerTurn = 2;
        $(".tokenHoverContainer img").attr('src', 'assets/token2.png');
        $(".player2").css({
            'font-weight': 'bold',
            'border': '3px solid black',
            'font-size': '1.5rem',
            'padding-top': '1%',
        })
        $(".player1").css({
            'font-weight': 'normal',
            'border': 'none',
            'font-size': '1rem',
            'padding-top': '3%',
        })
    } else{
        playerTurn = 1;
        $(".tokenHoverContainer img").attr('src', 'assets/token1.png');
        $(".player1").css({
            'font-weight': 'bold',
            'border': '3px solid black',
            'font-size': '1.5rem',
            'padding-top': '1%',
        })
        $(".player2").css({
            'font-weight': 'normal',
            'border': 'none',
            'font-size': '1rem',
            'padding-top': '3%',
        })

    }
    console.log('we changed player and player is', playerTurn);
}

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