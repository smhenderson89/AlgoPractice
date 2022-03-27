/*TicTacToe.js is a game of Tic Tac Toe with two players trading off controls for the game. The game will
alternate between each player until there is a Win or the game ends in a tie. To exit out of the game at any
time, press Ctrl + C to end the program 

**REQUIREMENTS**
npm i prompt-sync ==> Install prompt-sync to accept user inputs from the terminal window
https://www.npmjs.com/package/prompt-sync

*/

function tictacToe () {
    const prompt = require('prompt-sync')({sigint: true});

    // Intial Greeting Message
    console.log('Welcome to a Game of Tic-Tac-Toe');
    console.log('To play a spot, enter a number between 1 thru 9, corresponding to the location on the board')
    console.log('The number will be replaced with a game piece once played')
    console.log("To exit the game at any time, press 'Control + C' ");
    
    /* At the start the game, randomly roll who will go first and assign game pieces */
    var randomBoolean = Math.random() < 0.5;
    if (randomBoolean) {
        turn = 'X';
    } else {
        turn = 'O';
    }

    const winConditions = 
    [[0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal index locaitons for a Win
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical index locations for a win
    [0, 4, 8], [6, 4, 2]];            // Diagnol index locations for a win

    // Intalize empty board board state
    // '' == Empty spot, no pieces placed
    // Players pieces will be filled in as either 'X' or 'O'
    boardState = ['','','',
                  '','','',
                  '','',''];

    displayBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    playerXmoves = [];
    player0moves = [];
    gameWin = false;
    endofGame = false;

    /* Display board to user during each turn. 
    Board will update will game pieces as the game progresses
    Example starting board 
    1 | 2 | 3
    - * - * -
    4 | 5 | 6
    - * - * -
    7 | 8 | 9
    */

    function displayBoardState () { // Print board state to user as a series of lines
        console.log("");
        boardLength = displayBoard.length;
        lineOutput = ""; 
        for (let i = 0; i < boardLength; i++) {
            if (i == 2 || i == 5 || i == 8) { // If have reached the end of a output line
                lineOutput += displayBoard[i];
                console.log(lineOutput); // Output the line to the terminal
                if (i != 8) {
                    console.log('- * - * -'); // Print out a line between rows
                }
                lineOutput = ""; // Reset lineOuput to empty
            } else {
                lineOutput += (displayBoard[i] + " | "); // Add characters to the line with a border
            }
        }
    }

    // Play the game of Tic-Tac-Toe until the a player has won OR the game is a tie
    for (let i = 0; i <= 8; i++) {
        if (!gameWin || !endofGame) { // If game has not been won or the game has ended in a tie
            displayBoardState()
            let validMove = false;
            while (!validMove) { // Check if user is inputting a valid move
                const playerMove = prompt(`Player (${turn}), where do you want to move? `);
                console.log(`Player (${turn})'s move is location ${playerMove}`);
                validMove = checkMove(playerMove, turn); // If move is valid, then procede to next turn
            }
            // Check if move has caused a game to end?
            currentMoves = playerMoves(turn) // Check the current board position for a win?
            movesLength = currentMoves.length
            if (movesLength >= 3) {
                if (checkWin(currentMoves)) {
                    gameWin = true
                    console.log(`Congrats, Player (${turn}) on your win!`)
                    displayBoardState()
                    break // End the game
                } else if (movesLength == 5) {
                    endofGame = true
                    console.log('Game Over! The game is a tie')
                    break // End the game
                }
            }
            turn = changeTurn(turn); // Change the Turn from a 'X' to an 'O' and vice versa
        } else { // If gameWin = true or endofGame = true
            return true
        }
    }

    /* checkMove takes a playerMove from the terminal window and the turn ('X' or 'O') and returns
    true or false if the move if a legal move on the gameboard */
    function checkMove (playerMove, turn) {
        // Check if the move from the player is a valid move?
        moveFloat = parseFloat(playerMove, 10); // Convert playerMove into a float with base 10
        moveInt = parseInt(playerMove, 10); // Convert playerMove into an interger with base 10
        if (moveFloat != moveInt) { // Check if move is an interger
            console.log('Must enter an interger')
            return false
        }  else if (moveInt < 1 || moveInt > 9) { // does the input exceed numbers 1-9?
            console.log('Sorry, move must be an interger between 1-9')
            return false;
        } else if (checkEmpty(moveInt, turn)) { 
            // Is the player's move on an empty space?
            return true
        } else { // If does not meet accepted input criteria
            return false
        }
    }

    /* checkEmpty determines if a space in the BoardState is empty for a piece to be placed. If so,
    it will update the board with the new move */
    function checkEmpty (move, turn) { 
        // Convert board state to array index location
        moveIndex = move - 1;
        if (boardState[moveIndex] == '') { // If the boardSate is emtpy
            boardState[moveIndex] = turn; // Update that point of the array with the player's move
            displayBoard[moveIndex] = turn; // Update Game state to player
            updatePlayerMoves(moveIndex, turn) // Update move array associated with player
            return true
        } else {
            console.log('Space is already occupied, choose another space')
            return false
        }
    }

    /* changeTurn takes an input "turn" which can be either an 'X' or 'O' and 
    alternates the value of turn into the next players turn */
    function changeTurn (turn) { 
        if (turn === "X") {
            turn = "O"
        } else {
            turn = "X"
        }
        return turn 
    }

    /* updatePlayerMoves takes in the location of the move on the boardState and whose turn it is, "X" or "O"
    Based on those inputs it will update the associated player's moves array to determine a possible win */
    function updatePlayerMoves (moveIndex, turn) {
        if (turn === "X") {
            playerXmoves.push(moveIndex);
        } else {
            player0moves.push(moveIndex);
        }
    }

    /* playerMoves takes the input of either 'X' or 'O' and returns an array of the moves that player has taken*/
    function playerMoves(turn) {
        if (turn == 'X') {
            return playerXmoves
        } else {
            return player0moves
        }
    }

    /* checkWin will take in the boardState and whose turn it is ("X" or "O") and determine if a win has occured
    If no win has occured, it will then determine if there is a draw. If neither cases have occured it will reutrn 
    false and the game will continue */

    function checkWin(moves) { // Check if a player has achieved a win
        sortedMoves = moves.sort() // Sort moves lowest to highest intergers for their location
        winFound = false // Set initial conidtion of win to False
        for (k = 0; k < winConditions.length; k++) { // Iterate over all possible winning combinations
            if(!winFound) { // If a player has not yet found a win
                winFound = checkSubArray (sortedMoves, winConditions[k]) // Check moves against possible win
            } else {
                winFound = true; // Win has been found, game is over
                break
            }
        }
    
        // after checking all solutions, return true or false if there is a win
        if (winFound) {
            return true // Game is over
        } else {
            return false // Game will continue
        }
    }
    
    /* checkSubArray takes a players move set of intergers and compaores it to one set of possible wins. 
    If the players moves match up to be a subArray of a possible win, the function returns true, 
    otherwise it returns false 
    moves = playerXmoves or player0moves
    testCase = sub array of possible winConditions
    */
    function checkSubArray (moves, testCase) { // Check if the moves exist as a win in the 
        m = testCase.length;
        n = moves.length;
        let i = 0;
        let j = 0;
        matches = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (moves[i] === testCase[j]) { // If there is match between moves and possible win
                    matches++;
                } 
            }
        }
    
        if (matches < 3) { // If there are less than 3 matches for the sub array, no win exists
            return false
        } else { // Valid win has been found
            return true
        }
    }
}

tictacToe()

