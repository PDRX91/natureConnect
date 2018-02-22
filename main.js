$(document).ready(initializeApp);
var playerTurn = 1;
var stopHover = 'no';
function initializeApp(){
    clickHandler();
    var player1 = new Player('John');
    var player2 = new Player('Susie');
}

function clickHandler(){
    $('.gameboard > div').click(processClick);
    $(".gameboard > div").hover(checkShowFauxToken, hideFauxToken);
    $('.tokens>div').on('click', setPlayerTokenImg);
    $('.bestOfOptions').change(getBestOf);

}

function processClick(){
    var that = this;
    //update board array with new position
    //once we update location of array we also check win condition and player
    locationUpdate(that);
}

function locationUpdate(that){

    var classes = $(that).attr('class');
    var column = classes.charAt(6);
    var row = classes.charAt(11);
    var currentPlayer = playerTurn;

    // console.log('column: ' + column);
    // console.log('row: ' + row);
    // console.log('current player: ' + currentPlayer);
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
            // 'border': '3px solid rgba(169, 166, 166, .5)',
            'background-color': 'rgba(75, 189, 271, .7)',
            'font-size': '1.5rem',
            'padding-top': '2%',
        })
        $(".player1").css({
            'font-weight': 'normal',
            'background-color': 'rgba(75, 189, 271, .4)',
            'border': 'none',
            'font-size': '1rem',
            'padding-top': '3%',
        })
    } else{
        playerTurn = 1;
        $(".tokenHoverContainer img").attr('src', 'assets/token1.png');
        $(".player1").css({
            'font-weight': 'bold',
            // 'border': '3px solid rgba(169, 166, 166, .5)',
            'background-color': 'rgba(75, 189, 271, .7)',
            'font-size': '1.5rem',
            'padding-top': '2%',
        })
        $(".player2").css({
            'font-weight': 'normal',
            'background-color': 'rgba(75, 189, 271, .4)',
            'border': 'none',
            'font-size': '1rem',
            'padding-top': '3%',
        })

    }
    console.log('we changed player and player is', playerTurn);
}
function checkShowFauxToken(){
    var that = this;
    if(stopHover ==='no'){
        showFauxToken(that);
    }
}
function showFauxToken(that){
    var currentHoveredClass = $(that).attr('class');
    var currentColumn = currentHoveredClass.substr(0,7);
    var hoverSelector = "." + currentColumn + " img.faux"
    $(hoverSelector).css('display', 'inline-block');
}

function hideFauxToken(column){
    if(typeof column === 'string'){
        $('.column' + column + ' img.faux').css('display','none');
        return;
    }
    var currentHoveredClass = $(this).attr('class');
    var currentColumn = currentHoveredClass.substr(0,7);
    var hoverSelector = "." + currentColumn + " img.faux"
    $(hoverSelector).css('display', 'none');
}

function resultScreen(result) {
    console.log('this is our result', result);
    if (result === 'tie') {
        var winBox = $("<div>").addClass('winBox').text('Tie Game...');
        $('.winMsg').append(winBox);
    }
    else {
        var winBox = $("<div>").addClass('winBox').text('Player ' + result + ' wins!');
        $('.winMsg').append(winBox);
    }
}

//version3.0
