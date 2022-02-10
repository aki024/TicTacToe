const gameBoard = (() => {

    //PLAYER FACTORY
    const Player = (name, sign, turn) => {

            const isYourTurn = function() {
                if (this.turn == true) {
                    this.turn = false;

                } else {
                    this.turn = true;

                }

            }
            let turnStatus;
            const currentTurn = function() {
                if (this.turn == true) {
                    return 'yes';

                } else {
                    return 'no';

                }
            }
            return { name, sign, turn, isYourTurn, currentTurn, turnStatus };

        }
        //MADE 2 PLAYERS
    const player1 = Player('player 1', 'x', true);

    const player2 = Player('player 2', 'o', false);

    //BOARD ARRAY
    const board = ['', '', '', '', '', '', '', '', ''];
    //GET ALL THE SQUARES
    const getSquares = () => document.querySelectorAll('.square');
    //RENDER WHICH I WILL MODIFY
    const renderBoard = () =>
        getSquares().forEach(square => {
            for (let i = 0; i < board().length; i++) {

                nodeToArray()[i].innerHTML = board()[i];

            }
        });


    //Node to array function
    const nodeToArray = () => Array.from(getSquares());


    //add event listener
    const eventListener = () => getSquares().forEach(square => {
        square.addEventListener('click', mark)
    });

    //on click mark
    const mark = (e) => {
        let mark;
        mark = nodeToArray().indexOf(e.target);
        if (player1.currentTurn() === 'yes' && nodeToArray()[mark].innerHTML === 'o' || nodeToArray()[mark].innerHTML === 'x') {

        } else if (player2.currentTurn() === 'yes' && nodeToArray()[mark].innerHTML === 'o' || nodeToArray()[mark].innerHTML === 'x') {

        } else if (player1.currentTurn() === 'yes' && nodeToArray()[mark].innerHTML != 'x') {
            nodeToArray()[mark].innerHTML = 'x';
            board[mark] = 'x';
            checkWinner();
            changePlayer();
        } else if (player2.currentTurn() === 'yes' && nodeToArray()[mark].innerHTML != 'o') {
            nodeToArray()[mark].innerHTML = 'o';
            board[mark] = 'o';
            checkWinner();
            changePlayer();

        }
    }

    //changing players
    const changePlayer = () => {
        if (player1.currentTurn() === 'yes') {
            player1.isYourTurn();
            player1.currentTurn();
            player2.isYourTurn();

            player2.currentTurn();
        } else {
            player2.isYourTurn();
            player2.currentTurn();
            player1.isYourTurn();
            player1.currentTurn();

        }

    }

    //Check winner
    const checkWinner = () => {

        //x sign
        if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
            console.log('win');
            stopGame();
        } else if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
            console.log('win');
            stopGame();
        } else if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
            console.log('win');
            stopGame();
        } else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
            console.log('win');
            stopGame();
        } else if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
            console.log('win');
            stopGame();
        } else if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
            console.log('win');
            stopGame();
        } else if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
            console.log('win');
            stopGame();
        } else if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
            console.log('win');
            stopGame();

            //o sign
        } else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') {
            console.log('win2');
            stopGame();
        } else if (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') {
            console.log('win2');
            stopGame();
        } else if (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
            console.log('win2');
            stopGame();
        } else if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') {
            console.log('win2');
            stopGame();
        } else if (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') {
            console.log('win2');
            stopGame();
        } else if (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') {
            console.log('win2');
            stopGame();
        } else if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') {
            console.log('win2');
            stopGame();
        } else if (board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
            console.log('win2');
            stopGame();
        } else if (board.includes('')) {
            console.log('idee');
        } else {
            console.log('draw');
        }
    }

    //Disable clicking
    const stopGame = () => {
        getSquares().forEach(square => {
            square.removeEventListener('click', mark);
        });

    }
    eventListener();
    return { board, getSquares, renderBoard, eventListener, nodeToArray, Player, player1, player2 };


})();