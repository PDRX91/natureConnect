//create our board
var boardArray = [];
for (var row = 0; row < 6; row++){
    var eachRow = [];
    for(var column = 0; column < 7; column++){
        eachRow.push(0);
    }
    boardArray.unshift(eachRow);
}
//some dummy values for testing before click functionality
// boardArray[4][4] = 1;
// boardArray[4][5] = 1;
// boardArray[3][3] = 1;
// boardArray[2][2] = 1;

function updateBoardArray(row, column, currentPlayer){
    //go through each row at my column and check if there is a 0 there. if yes change to currentPlayer variable return
    for(var i = boardArray.length - 1; i >= 0; i--){
        if(boardArray[i][column] === 0){
            //change 1 to current player after we have that functionality;
            boardArray[i][column] = currentPlayer;
            checkWinCondition(row, column, currentPlayer);
            return;
        }
    }
}
function checkWinCondition(row, column, currentPlayer){
    console.log('checking win at row', row, ' column', column);
    //check horizontal
    var won = true;
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
    for (var row = 0; row < 6; row++){
        for(var column = 0; column < 7; column++){
            if(row+column === upwardDiagonal){
                diagStringUpward += boardArray[row][column];
            }
            if(row - column === downwardDiagonal){
                diagStringDownward += boardArray[row][column]
            }
        }
    }
    testString += diagStringUpward + diagStringDownward;
    console.log('array', boardArray, 'testString', testString);
    if(testString.indexOf(playerWin) !== -1){
        console.log('player ' + currentPlayer + ' won');
    }
    else{
        console.log('not a win');
    }
    changePlayer();
}