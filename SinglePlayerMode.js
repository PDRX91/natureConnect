// Ai flow chart
//  AI is 2's
// after player 1 animate happens call ai function/object/instance
// run through each possible 7 moves. simulate move and call win checking on them
// if that move returns win play it.
//simulate opponents possible 7 moves. if that move wins block it.
//else just play a random legal move.

//start AI as second player when we are in single player mode.



//remove this feature for now by disabling it in linked pages html
// if(player2.name === 'ai'){
//
// }

//
// var legalMoveArray = [];
function moveAi(){
    // if(activePlayer.playerNumber === 1) {
        var move = checkForWinAndLoss();
        var randomRow = null;
        console.log('move is', move);
        if (move === null) {
            while (board.boardArray[0][randomRow] !== 0) {
                randomRow = Math.floor(Math.random() *
                    board.boardArray[0].length);
            }
            console.log('row is', randomRow);
            move = randomRow;
        }
        $('.column' + move + '.row5').click();
    // }
}
function checkForWinAndLoss(){
    //ai is 2
    var checkPlayer = 2;
    var nextMove = null;
    //var legalMoveArray = [];
    for(var i = 0; i < board.boardArray[0].length; i++){
         var move = board.updateBoardArray(5, i, checkPlayer);
         if(move != -1){
             if(board.checkWinCondition(move, i, checkPlayer) === 'win'){
                 deleteSimulatedMove(move, i);
                 nextMove = i;
                 console.log('ai wants to place in this column', nextMove);
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
                console.log('ai wants to place in this column', nextMove);
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