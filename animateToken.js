
function createToken(column, playerNumber){
    var startSquare = $('.tokenHoverContainer .column' + column);
    var activeToken = $('<img>',{
        'class':'tokenActive',
        src:'assets/token' + playerNumber + '.png',
    });
    startSquare.append(activeToken);
}

function moveToken(row, col) {
    var token = $('.tokenActive');
    var duration = 300 + 100*row;
    var targetRow = $('.row' + row);
    var targetColumn = $('.column' + col);
    var rowPosition = targetRow.position().top;
    var colPosition = targetColumn.position().left;
    token.animate({top: rowPosition, left: colPosition},
        duration, 'linear', function(){
            changeToFaux(row, col);
            token.css('display','none');
            token.remove();
        });
        //put this directly into animate once we can ease
    // 'futureEasing',
    //     function(){
    //         console.log('we just moved');
    //     });
    // changeToFaux(row, col);
    // token.css('display','none');
    // token.remove();
}

function changeToFaux(row, col){
    var targetSquare = $('.column' + col + '.row' + row);
    var tokenImage = $('<img>',{
        'class':'fauxToken',
        src:'assets/blackToken1.png'
    });
    targetSquare.append(tokenImage);

}