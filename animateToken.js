var tokenAnimation = {
    stopHover:'no',
    changeToFaux: function(row, col, playerNumber, playerToken){
        var targetSquare = $('.column' + col + '.row' + row);
        var tokenImage = $('<img>',{
            'class':'fauxToken',
            src:'assets/token' + playerToken + '.png'
        });
        targetSquare.css({
            'background-image':
            'url(assets/token' + playerToken + '.png)' ,
            'background-size':'contain'});
    },
    createToken: function (column, playerNumber, playerToken){
        this.stopHover = 'yes';
        this.hideFauxToken(column);
        var startSquare = $('.tokenHoverContainer .column' + column);
        var activeToken = $('<img>',{
            'id':'tokenActive',
            src:'assets/token' + playerToken + '.png',
        });
        startSquare.prepend(activeToken);
        },
        moveToken: function (row, col, playerNumber, playerToken) {
        var that = this;
        var token = $('#tokenActive');
        var duration = 300 + 100*row;
        var target = $('.column' + col + '.row' + row);
        var rowPosition = target.position().top - $('#tokenActive').position().top;
        setTimeout(() => {explode(row, col, duration-500)});
        $('div.gameContainer').addClass('disableClicks');
        token.animate({top: rowPosition},
            duration, 'easeOutBounce', function(){
                that.changeToFaux(row, col, playerNumber, playerToken);
                token.css('display','none');
                token.remove();
                that.stopHover = 'no';
                if(row === 0){
                    board.disableColumn(col);
                }
                var result = board.checkWinCondition(row, col, playerNumber);
                if(result === 'win'){
                    $('div.gameContainer').addClass('disableClicks');
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
                    board.changePlayer();
                    if(player1.name === 'AI' && player2.name === 'AI'){
                        moveAi();
                    }
                    else if(player2.name === 'AI' && activePlayer.playerNumber === 1){
                        moveAi();
                    }
                }
            });
    },
    checkShowFauxToken:function (){
        var that = this;
        if(tokenAnimation.stopHover ==='no'){
            tokenAnimation.showFauxToken(that);
        }
    },
    showFauxToken:function (that){
        var currentHoveredClass = $(that).attr('class');
        var currentColumn = currentHoveredClass.substr(0,7);
        var hoverSelector = "." + currentColumn + " img.faux";
        $(hoverSelector).css('display', 'inline-block');
    },
    hideFauxToken:function (column){
        if(typeof column === 'string'){
            $('.column' + column + ' img.faux').css('display','none');
            return;
        }
        var currentHoveredClass = $(this).attr('class');
        var currentColumn = currentHoveredClass.substr(0,7);
        var hoverSelector = "." + currentColumn + " img.faux"
        $(hoverSelector).css('display', 'none');
    }
};
