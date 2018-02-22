
function createToken(column, playerNumber){
    var startSquare = $('.tokenHoverContainer .column' + column);
    var activeToken = $('<img>',{
        'class':'tokenActive',
        src:'assets/token' + playerNumber + '.png',
    });
    startSquare.append(activeToken);
}

function moveToken(row, col, playerNumber) {
    var token = $('.tokenActive');
    var duration = 300 + 100*row;
    var targetRow = $('.row' + row);
    var targetColumn = $('.column' + col);
    var rowPosition = targetRow.position().top;
    var colPosition = targetColumn.position().left;
    token.animate({top: rowPosition, left: colPosition},
        duration, 'linear', function(){
            changeToFaux(row, col, playerNumber);
            token.css('display','none');
            token.remove();
        });
}

function changeToFaux(row, col, playerNumber){
    console.log(playerNumber,'playerNubmer');
    var targetSquare = $('.column' + col + '.row' + row);
    var tokenImage = $('<img>',{
        'class':'fauxToken',
        src:'assets/token' + playerNumber + '.png'
    });
    // targetSquare.append(tokenImage);
    targetSquare.css({
        'background-image':
        'url(assets/token' + playerNumber + '.png',
        'background-size':'contain'});
}