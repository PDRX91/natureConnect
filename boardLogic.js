//create our board
var tie = 'true';
var board = {
    playerTurn:1,
    boardArray:[],
    createBoard:function(){
        for (var row = 0; row < 6; row++){
            var eachRow = [];
            for(var column = 0; column < 7; column++){
                eachRow.push(0);
            }
            this.boardArray.unshift(eachRow);
        }
    },
    updateBoardArray: function (row, column, currentPlayer){
    //go through each row at my column and check if there is a 0 there. if yes change to currentPlayer variable return
        for(var i = this.boardArray.length - 1; i >= 0; i--){
            if(this.boardArray[i][column] === 0){
                this.boardArray[i][column] = currentPlayer;
                return i;
            }
        }
        return -1;
    },
    checkWinCondition: function (tokenRow, tokenColumn, currentPlayer){
    var playerWin = currentPlayer.toString() +
        currentPlayer +
        currentPlayer +
        currentPlayer;
    var testString = 'Row:';
    var verticalString = 'Vertical:';
    var diagStringUpward = ' UpwardDiagonal:';
    var diagStringDownward = ' DownwardDiagonal:';
    var upwardDiagonal = parseInt(tokenRow) + parseInt(tokenColumn);
    var downwardDiagonal = tokenRow - tokenColumn;
    tie = true;
    for (var row = 0; row < 6; row++){
        for(var column = 0; column < 7; column++){
            //add to upward diagonal
            if(row+column === upwardDiagonal){
                diagStringUpward += this.boardArray[row][column];
            }
            //add to downward diagonal
            if(row - column === downwardDiagonal){
                diagStringDownward += this.boardArray[row][column]
            }
            //check tie
            if(this.boardArray[row][column] === 0){
                tie = false;
            }
            // add horizontal to string
            if(row === tokenRow){
                testString+= this.boardArray[tokenRow][column];
            }
            //add vertical to string
            if(column === parseInt(tokenColumn)){
                verticalString += this.boardArray[row][tokenColumn];
            }
        }
    }
    testString += verticalString + diagStringUpward + diagStringDownward;
    console.log('array', this.boardArray, 'testString', testString);
    //CHANGE LOCATION OF CHANGE PLAYER
        if(tie){
            return 'tie';
        }
        else if(testString.indexOf(playerWin) !== -1){
            return 'win';
        }
        else{
            console.log('not a win');
        }
    },
    disableColumn: function(column)
    {
        $('.column' + column).attr('class','disableClicks');
    },
    changePlayer: function (){
    if(this.playerTurn === 1){
        this.playerTurn = 2;
        $(".tokenHoverContainer img").attr('src', 'assets/token' + player2.tokenNumber + '.png');
        $(".player2").css({
            'font-weight': 'bold',
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
        this.playerTurn = 1;
        $(".tokenHoverContainer img").attr('src', 'assets/token' + player1.tokenNumber + '.png');
        $(".player1").css({
            'font-weight': 'bold',
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
    console.log('we changed player and player is', this.playerTurn);
    },
    resetBoard: function(){
        this.boardArray = [];
        this.createBoard();
        $('.gameboard > div').removeAttr('style');
        if(activePlayer === player1){
            this.changePlayer();
        }
        $('div.gameContainer').removeClass('disableClicks');
        $('.winMsg').text('');
    }
};
