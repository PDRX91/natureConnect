function createToken(column, playerNumber){
    stopHover = 'yes';
    hideFauxToken(column);
    var startSquare = $('.tokenHoverContainer .column' + column);
    var activeToken = $('<img>',{
        'id':'tokenActive',
        src:'assets/token' + playerNumber + '.png',
    });
    startSquare.prepend(activeToken);
}

function moveToken(row, col, playerNumber) {
    var token = $('#tokenActive');
    var duration = 300 + 100*row;
    var target = $('.column' + col + '.row' + row);
    var rowPosition = target.position().top - $('#tokenActive').position().top;
    var colPosition = target.position().left;
    $('div.gameContainer').addClass('disableClicks');
    token.animate({top: rowPosition},
        duration, 'easeOutBounce', function(){
            changeToFaux(row, col, playerNumber);
            token.css('display','none');
            token.remove();
            stopHover = 'no';
            if(row === 0){
                disableColumn(col);
            }
            var result = checkWinCondition(row, col, playerNumber);

            if(result === 'win'){
                resultScreen(playerNumber);
                console.log('we won');
            }
            else if(result === 'tie'){
                console.log('we tied');
                resultScreen('tie');
            }
            else{
                console.log('re-adding clicks');
                $('div.gameContainer').removeClass('disableClicks');

            }

        });
}

function changeToFaux(row, col, playerNumber){
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