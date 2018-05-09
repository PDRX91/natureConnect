$(document).ready(initializeApp);

var activePlayer = null;
var player1 = null;
var player2 = null;
let activeWinner = false;
let setupGame = null;
let tokenExplosion = null;
let tokenAnimation = null;
let board = null;
function initializeApp(){
    setupGame = new SetupGame();
    clickHandler();
    tokenExplosion = new TokenExplosion();
    tokenAnimation = new TokenAnimation();
    board = new Board();
}
function clickHandler(){
    $('.bestOfOptions').change(function(){
        setupGame.getBestOf();
    });
    $('.startBtn').on('click', function(){
        setupGame.hideLandingAndProcessInputs();
    });
    $('.gameboard > div').click(processMove);
    $(".gameboard > div").hover((e) => tokenAnimation.checkShowFauxToken(e), (e) => tokenAnimation.toggleFauxToken(e, 'none'));
    $('.tokens>div').on('click', function(){
        setupGame.setPlayerTokenImg();
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
    if (activeWinner){
        return;
    }
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
        this.gameWon = 0;
        $('.player' + this.playerNumber ).text(this.name);
        this.status = 'inactive';
        $('.player' + playerNumber).css('background-image', 'url(assets/token' + tokenNumber + '.png)')
    }
}

function resultScreen(result) {
    var seriesLength = parseInt($('.playToNumber').text());
    if (result === 'tie') {
        var winBox = $("<div>").addClass('winBox').text('Tie Game...');
        $('.winMsg').append(winBox);
    }
    else {
        // if(player1.name === 'AI' && player2.name === 'AI'){
        //     var winBox = $("<div>").addClass('winBox').text(activePlayer.name + ' ' + activePlayer.playerNumber + ' wins this round!');
        // } else {
        let winText;
        if (seriesLength === 1){
            winText = ' won the match!'
            var winBox = $("<div>").addClass('winBox');
            setTimeout(function(){
                $('.winMsg .winBox').text(activePlayer.name + ' won the match!').css('color', 'red');
            },1);
        } else {
            var winbox;
            if (activePlayer.playerNumber === 1) {
                player1.gameWon++;
                if(!(player1.gameWon > seriesLength/2.0)){
                    winBox = $("<div>").addClass('winBox').text(player1.name + ' won the game!');
                } else {
                    winBox = $("<div>").addClass('winBox');
                    setTimeout(function(){
                        $('.winMsg .winBox').text(player1.name + ' won the match!').css('color', 'red');
                    },1);
                }
                $('.playerDisplay1').text(player1.gameWon);
            }
            else if (activePlayer.playerNumber === 2) {
                player2.gameWon++;
                if(!(player2.gameWon > seriesLength/2.0)){
                    winBox = $("<div>").addClass('winBox').text(player2.name + ' won the game!');
                } else {
                    winBox = $("<div>").addClass('winBox');
                    setTimeout(function(){
                        $('.winMsg .winBox').text(player2.name + ' won the match!').css('color', 'red');
                    },1);
                }
                $('.playerDisplay2').text(player2.gameWon);
            }

        }
        // var winBox = $("<div>").addClass('winBox').text(activePlayer.name + winText);
        
        // }
        $('.winMsg').append(winBox);
    }
}
