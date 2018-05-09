function moveAi(){
    var move = checkForWinAndLoss();
    var randomRow = null;
    if (move === null) {
        while (board.boardArray[0][randomRow] !== 0) {
            randomRow = Math.floor(Math.random() *
                board.boardArray[0].length);
        }
        move = randomRow;
    }
    
    setTimeout(()=>{
        $('div.gameContainer').removeClass('disableClicks');
        $('.column' + move + '.row5').click()}, 800);
}

function checkForWinAndLoss(){
    var checkPlayer = 2;
    var nextMove = null;
    for(var i = 0; i < board.boardArray[0].length; i++){
        var move = board.updateBoardArray(5, i, checkPlayer);
        if(move != -1){
            if(board.checkWinCondition(move, i, checkPlayer) === 'win'){
                deleteSimulatedMove(move, i);
                nextMove = i;
                return nextMove;
            }
            else{
                deleteSimulatedMove(move,i);
            }
        }
    }
    checkPlayer = 1;
    for(var i = 0; i < board.boardArray[0].length; i++){
        var move = board.updateBoardArray(5, i, checkPlayer);
        if(move != -1){
            if(board.checkWinCondition(move, i, checkPlayer) === 'win'){
                deleteSimulatedMove(move, i);
                nextMove = i;
                return nextMove;
            }
            else{
                deleteSimulatedMove(move,i);
            }
        }
    }
    return nextMove;
}

function deleteSimulatedMove(row, column){
    board.boardArray[row][column] = 0;
}