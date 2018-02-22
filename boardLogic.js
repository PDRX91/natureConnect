//create our board
var tie = 'true';
var boardArray = [];
for (var row = 0; row < 6; row++){
    var eachRow = [];
    for(var column = 0; column < 7; column++){
        eachRow.push(0);
    }
    boardArray.unshift(eachRow);
}

function updateBoardArray(row, column, currentPlayer){
    //go through each row at my column and check if there is a 0 there. if yes change to currentPlayer variable return
    for(var i = boardArray.length - 1; i >= 0; i--){
        if(boardArray[i][column] === 0){
            boardArray[i][column] = currentPlayer;
            return i;
        }

    }
}
function checkWinCondition(row, column, currentPlayer){
    //check horizontal
    var playerWin = currentPlayer.toString() +
                    currentPlayer +
                    currentPlayer +
                    currentPlayer;
    var testString = 'row:';
    var diagStringUpward = ' UpwardDiagonal:';
    var diagStringDownward = ' DownwardDiagonal:';
    var upwardDiagonal = parseInt(row) + parseInt(column);
    var downwardDiagonal = row - column;
    for(var i = 0; i < boardArray[row].length; i++){
        testString += boardArray[row][i];
    }
    //check vertical
    testString += ' col:'
    for(var i = 0; i < boardArray.length; i++){
        testString += boardArray[i][column];
    }
    //check diagonal
    tie = true;
    for (var row = 0; row < 6; row++){
        for(var column = 0; column < 7; column++){
            if(row+column === upwardDiagonal){
                diagStringUpward += boardArray[row][column];
            }
            if(row - column === downwardDiagonal){
                diagStringDownward += boardArray[row][column]
            }
            if(boardArray[row][column] === 0){
                tie = false;
            }

        }
    }
    testString += diagStringUpward + diagStringDownward;
    console.log('array', boardArray, 'testString', testString);

    changePlayer();
    if(tie){
        return 'tie';
    }
    else if(testString.indexOf(playerWin) !== -1){
        $('div.gameContainer').addClass('disableClicks');

        return 'win';
    }
    else{
            console.log('not a win');
        }
}


function disableColumn(column)
{
        $('.column' + column).attr('class','disableClicks');
}