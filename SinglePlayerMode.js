// Ai flow chart
//  AI is 2's
// after player 1 animate happens call ai function/object/instance
// run through each possible 7 moves. simulate move and call win checking on them
// if that move returns win play it.
//simulate opponents possible 7 moves. if that move wins block it.
//else just play a random legal move.

//start AI as second player when we are in single player mode.
if(gameMode = 'single player'){
    //var player2 = new Player('AI', 2);
}

//
var legalMoveArray = [];
function checkForWinAndLoss(){
    //ai is 2
    var currentPlayer = 2;
    var nextMove = null;
    //var legalMoveArray = [];
    for(var i = 0; i < boardArray[0].length; i++){
         var move = updateBoardArray(5, i, currentPlayer);
         if(move != -1){
             if(checkWinCondition(move, i, currentPlayer) === 'win'){
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
}

function deleteSimulatedMove(row, column){
    boardArray[row][column] = 0;
}