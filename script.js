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
    let board = ['', '', '', '', '', '', '', '', ''];
    //GET ALL THE SQUARES - restart board
    const getSquares = () => document.querySelectorAll('.square');

    const renderBoard = () =>
        getSquares().forEach(square => {
            for (let i = 0; i < gameBoard.board.length; i++) {

                nodeToArray()[i].innerHTML = gameBoard.board[i];

            }
        });


    //Node to array function
    const nodeToArray = () => Array.from(getSquares());


    //add event listener
    const eventListener = () => getSquares().forEach(square => {
        square.addEventListener('click', mark)
        const restartButton = document.querySelector('.restartGame')
        restartButton.addEventListener('click', restartGame);
        const newGameButton = document.querySelector('.newGame')
        newGameButton.addEventListener('click', newGame);
    });

    //on click mark
    const mark = (e) => {
        let mark;
        mark = nodeToArray().indexOf(e.target);
        if (player1.currentTurn() === 'yes' && nodeToArray()[mark].innerHTML === 'o' || nodeToArray()[mark].innerHTML === 'x') {

        } else if (player2.currentTurn() === 'yes' && nodeToArray()[mark].innerHTML === 'o' || nodeToArray()[mark].innerHTML === 'x') {

        } else if (player1.currentTurn() === 'yes' && nodeToArray()[mark].innerHTML != 'x') {
            nodeToArray()[mark].innerHTML = 'x';
            gameBoard.board[mark] = 'x';
            gameWin();
            changePlayer();
        } else if (player2.currentTurn() === 'yes' && nodeToArray()[mark].innerHTML != 'o') {
            nodeToArray()[mark].innerHTML = 'o';
            gameBoard.board[mark] = 'o';
            gameWin();
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
        let winner = "";
        //x sign
        if (gameBoard.board[0] === 'x' && gameBoard.board[1] === 'x' && gameBoard.board[2] === 'x') {
            winner = player1.name;



        } else if (gameBoard.board[3] === 'x' && gameBoard.board[4] === 'x' && gameBoard.board[5] === 'x') {
            winner = player1.name;
        } else if (gameBoard.board[6] === 'x' && gameBoard.board[7] === 'x' && gameBoard.board[8] === 'x') {
            winner = player1.name;
        } else if (gameBoard.board[0] === 'x' && gameBoard.board[3] === 'x' && gameBoard.board[6] === 'x') {
            winner = player1.name;
        } else if (gameBoard.board[1] === 'x' && gameBoard.board[4] === 'x' && gameBoard.board[7] === 'x') {
            winner = player1.name;
        } else if (gameBoard.board[2] === 'x' && gameBoard.board[5] === 'x' && gameBoard.board[8] === 'x') {
            winner = player1.name;
        } else if (gameBoard.board[0] === 'x' && gameBoard.board[4] === 'x' && gameBoard.board[8] === 'x') {
            winner = player1.name;
        } else if (gameBoard.board[2] === 'x' && gameBoard.board[4] === 'x' && gameBoard.board[6] === 'x') {
            winner = player1.name;
            //o sign
        } else if (gameBoard.board[0] === 'o' && gameBoard.board[1] === 'o' && gameBoard.board[2] === 'o') {
            winner = player2.name;
        } else if (gameBoard.board[3] === 'o' && gameBoard.board[4] === 'o' && gameBoard.board[5] === 'o') {
            winner = player2.name;
        } else if (gameBoard.board[6] === 'o' && gameBoard.board[7] === 'o' && gameBoard.board[8] === 'o') {
            winner = player2.name;
        } else if (gameBoard.board[0] === 'o' && gameBoard.board[3] === 'o' && gameBoard.board[6] === 'o') {
            winner = player2.name;
        } else if (gameBoard.board[1] === 'o' && gameBoard.board[4] === 'o' && gameBoard.board[7] === 'o') {
            winner = player2.name;
        } else if (gameBoard.board[2] === 'o' && gameBoard.board[5] === 'o' && gameBoard.board[8] === 'o') {
            winner = player2.name;
        } else if (gameBoard.board[0] === 'o' && gameBoard.board[4] === 'o' && gameBoard.board[8] === 'o') {
            winner = player2.name;
        } else if (gameBoard.board[2] === 'o' && gameBoard.board[4] === 'o' && gameBoard.board[6] === 'o') {
            winner = player2.name;
        } else if (gameBoard.board.includes('')) {

        } else {
            winner = 'draw'
        }
        return winner;
    }

    //player scores
    let p1score = 0;
    let p2score = 0;
    const gameWin = () => {
        const player1Score = document.querySelector('.score1');
        const player1Win = document.querySelector('.p1Win');
        const player2Score = document.querySelector('.score2');
        const player2Win = document.querySelector('.p2Win');

        if (checkWinner() === player1.name) {
            p1score++;
            player1Score.innerHTML = `Score: ${p1score}`;

            player1Win.innerHTML = `${player1.name} wins`
            stopGame();
        } else if (checkWinner() === player2.name) {
            p2score++;
            player2Score.innerHTML = `Score: ${p2score}`;
            player2Win.innerHTML = `${player2.name} wins`
            stopGame();
        } else if (checkWinner() === 'draw') {
            player1Score.innerHTML = `Score: ${p1score}`;
            player1Win.innerHTML = `Draw`
            player2Score.innerHTML = `Score: ${p2score}`;
            player2Win.innerHTML = `Draw`
            stopGame();
        } else {

        }

    }

    //Disable clicking
    const stopGame = () => {
        getSquares().forEach(square => {
            square.removeEventListener('click', mark);
        });

    }

    //Input support
    const addPlayer = () => {
        const inputOne = document.querySelector('#player1');
        const inputTwo = document.querySelector('#player2');
        //set the display name
        const displayOne = document.querySelector('.p1')
        const displayTwo = document.querySelector('.p2')

        displayOne.innerHTML = inputOne.value;
        displayTwo.innerHTML = inputTwo.value;

        showBoard();
        return { displayOne, displayTwo }

    }

    //add event button
    const startGame = () => {

            const startButton = document.querySelector('#submit');
            startButton.addEventListener('click', addPlayer);

        }
        //restart game button
    const restartGame = () => {
        gameBoard.board = ['', '', '', '', '', '', '', '', ''];
        console.log(gameBoard.board);
        renderBoard();

        const player1Win = document.querySelector('.p1Win');

        const player2Win = document.querySelector('.p2Win');
        player1Win.innerHTML = "";
        player2Win.innerHTML = "";
        player1.turn = true;
        player2.turn = false;
        eventListener();


    }

    const newGame = () => {
        const magic = document.querySelector('.gameBoard');
        const magic2 = document.querySelector('.inputNames');
        const input1 = document.querySelector('#player1')
        const input2 = document.querySelector('#player2')
        const displayOne = document.querySelector('.p1')
        const displayTwo = document.querySelector('.p2')
        const player1Win = document.querySelector('.p1Win');
        const player2Win = document.querySelector('.p2Win');
        const player1Score = document.querySelector('.score1');
        const player2Score = document.querySelector('.score2');

        gameBoard.board = ['', '', '', '', '', '', '', '', ''];
        magic.style.display = "none";


        magic2.style.display = "grid";
        input1.value = '';
        input2.value = '';
        displayOne.innerHTML = '';
        displayTwo.innerHTML = '';
        player1Win.innerHTML = "";
        player2Win.innerHTML = "";
        player1Score.innerHTML = "Score: ";
        player2Score.innerHTML = "Score: ";
        p1score = 0;
        p2score = 0;
        player1.turn = true;
        player2.turn = false;



        renderBoard();


    }

    //hide input and show board
    const showBoard = () => {
        const magic = document.querySelector('.gameBoard');
        const magic2 = document.querySelector('.inputNames');
        magic2.style.display = "none";
        magic.style.display = "grid";
        const displayOne = document.querySelector('.p1')
        const displayTwo = document.querySelector('.p2')
        let p1 = displayOne.innerHTML;
        let p2 = displayTwo.innerHTML;



        eventListener();


        player1.name = `${p1}`;
        player2.name = `${p2}`;

    }
    startGame();
    return { board, getSquares, renderBoard, eventListener, nodeToArray, Player, player1, player2, showBoard, gameWin, checkWinner };


})();