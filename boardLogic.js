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
    return -1;
}
function checkWinCondition(tokenRow, tokenColumn, currentPlayer){
    //check horizontal
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
            //add upward diagonal
            if(row+column === upwardDiagonal){
                diagStringUpward += boardArray[row][column];
            }
            //add downward diagonal
            if(row - column === downwardDiagonal){
                diagStringDownward += boardArray[row][column]
            }
            //check tie
            if(boardArray[row][column] === 0){
                tie = false;
            }
            //check horizontal and add to string
            if(row === tokenRow){
                testString+= boardArray[tokenRow][column];
            }
            //check vertical and add
            if(column === parseInt(tokenColumn)){
                verticalString += boardArray[row][tokenColumn];
            }

        }
    }
    testString += verticalString + diagStringUpward + diagStringDownward;
    console.log('array', boardArray, 'testString', testString);

    changePlayer();
    if(tie){
        return 'tie';
    }
    else if(testString.indexOf(playerWin) !== -1){
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