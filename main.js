$(document).ready(initializeApp);
//var playerTurn = 1;
// var stopHover = 'no';
var activePlayer = null;
var player1 = null;
var player2 = null;

function initializeApp(){
    clickHandler();
    // player(name, number, tokenNumber)/
    // player1 = new Player('ai', 1, 1);
    // player2 = new Player('ai', 2, 3);
    board.createBoard();

    //$('img.faux').attr('src','assets/token' + player1.tokenNumber + '.png');
}
function clickHandler(){
    $('.bestOfOptions').change(function(){
        landingPage.getBestOf();
    });
    $('.startBtn').on('click', function(){
        landingPage.hideLanding();
    });
    $('.gameboard > div').click(processMove);
    $(".gameboard > div").hover(tokenAnimation.checkShowFauxToken, tokenAnimation.hideFauxToken);
    $('.tokens>div').on('click', function(){
        landingPage.setPlayerTokenImg();
    });
    $('.resetBtn').on('click', function(){
        board.resetBoard()
    });
}

function processMove(){

    var classes = $(this).attr('class');
    var column = classes.charAt(6);
    var row = classes.charAt(11);
    var currentPlayer = board.playerTurn;
    if(currentPlayer === player1.playerNumber){
        activePlayer = player1;
    }
    else{
        activePlayer = player2;
    }
    activePlayer.status = 'active';
    var placementRow = board.updateBoardArray(row, column, activePlayer.playerNumber);
    tokenAnimation.createToken(column, activePlayer.playerNumber, activePlayer.tokenNumber);
    //tokenAnimation is processing logic after token drop. e.g.
    // player switching and win checking
    tokenAnimation.moveToken(placementRow, column, activePlayer.playerNumber, activePlayer.tokenNumber);

}

class Player{
    constructor(name, playerNumber, tokenNumber){
        this.name = name || 'Player 1';
        this.playerNumber = playerNumber;
        this.tokenNumber = tokenNumber;
        $('.player' + this.playerNumber ).text(this.name);
        this.status = 'inactive';
        $('.player' + playerNumber).css('background-image', 'url(assets/token' + tokenNumber + '.png)')
    }

}
function resultScreen(result) {
    console.log('this is our result', result);
    if (result === 'tie') {
        var winBox = $("<div>").addClass('winBox').text('Tie Game...');
        $('.winMsg').append(winBox);
    }
    else {
        if(player1.name === 'AI' && player2.name === 'AI'){
            var winBox = $("<div>").addClass('winBox').text(activePlayer.name + ' ' + activePlayer.playerNumber + ' wins!');
        }
        else{
            var winBox = $("<div>").addClass('winBox').text(activePlayer.name + ' wins!');

        }
        $('.winMsg').append(winBox);
    }
}
