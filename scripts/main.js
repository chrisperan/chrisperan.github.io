const squares = document.querySelectorAll('.grid div');
const result = document.querySelector('#result');
const displayCurrentPlayer = document.querySelector('#current_player');

let players = ['crossPlayer', 'circlePlayer'];
let randomPlayer = players[Math.floor(Math.random() * players.length)];
let currentPlayer = randomPlayer;
if(currentPlayer === 'crossPlayer') {
    displayCurrentPlayer.innerHTML = 'X';
}
if(currentPlayer === 'circlePlayer') {
    displayCurrentPlayer.innerHTML = 'O';
}

let crossTokens = 3;
let circleTokens = 3;

let tokenMoving = false;
let tokenMovingFrom;

const winningArrays = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
        const square1 = squares[winningArrays[y][0]]
        const square2 = squares[winningArrays[y][1]]
        const square3 = squares[winningArrays[y][2]]

        if(square1.classList.contains('cross') && square2.classList.contains('cross') && square3.classList.contains('cross')) {
            setTimeout(function(){
            squares[winningArrays[y][0]].classList.remove('cross');
            squares[winningArrays[y][1]].classList.remove('cross');
            squares[winningArrays[y][2]].classList.remove('cross');
            squares[winningArrays[y][0]].classList.add('cross_red');
            squares[winningArrays[y][1]].classList.add('cross_red');
            squares[winningArrays[y][2]].classList.add('cross_red')
            return;}, 500);

            setTimeout(function(){
                result.innerHTML = 'X WINS!';
            }, 1000);
        }
        if(square1.classList.contains('circle') && square2.classList.contains('circle') && square3.classList.contains('circle')) {
            setTimeout(function(){
            squares[winningArrays[y][0]].classList.remove('circle');
            squares[winningArrays[y][1]].classList.remove('circle');
            squares[winningArrays[y][2]].classList.remove('circle');
            squares[winningArrays[y][0]].classList.add('circle_red');
            squares[winningArrays[y][1]].classList.add('circle_red');
            squares[winningArrays[y][2]].classList.add('circle_red')
            return;}, 500);

            setTimeout(function(){
                result.innerHTML = 'O WINS!';
            }, 1000);
        }
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
        if(squares[i].classList.contains('taken')) {
            if(squares[i].classList.contains('cross')) {
                if( (currentPlayer === 'crossPlayer') && (crossTokens <= 0 ) && (tokenMoving === false) ) {
                    squares[i].classList.remove('taken')
                    squares[i].classList.remove('cross')
                    squares[i].classList.add('cross_grey')
                    crossTokens += 1
                    tokenMoving = true;
                    tokenMovingFrom = i;
                    return;
                }
            }
            if(squares[i].classList.contains('circle')) {
                if( (currentPlayer === 'circlePlayer') && (circleTokens <= 0 ) && (tokenMoving === false) ) {
                    squares[i].classList.remove('taken')
                    squares[i].classList.remove('circle')
                    squares[i].classList.add('circle_grey')
                    circleTokens += 1
                    tokenMoving = true;
                    tokenMovingFrom = i;
                    return;
                }
            }
        }
        else {
            if(tokenMoving === true){
                if(tokenMovingFrom === 0) {
                        if( (i === 0) || (i === 1) || (i === 3) ) {
                            if(currentPlayer === 'crossPlayer') {
                                squares[tokenMovingFrom].classList.remove('cross_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('cross')
                                crossTokens -= 1;
                                currentPlayer = 'circlePlayer';
                                displayCurrentPlayer.innerHTML = 'O';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                            if(currentPlayer === 'circlePlayer') {
                                squares[tokenMovingFrom].classList.remove('circle_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('circle')
                                circleTokens -= 1;
                                currentPlayer = 'crossPlayer';
                                displayCurrentPlayer.innerHTML = 'X';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                        }
                }
                if(tokenMovingFrom === 1) {
                        if( (i === 0) || (i === 1) || (i === 2) || (i === 4) ) {
                            if(currentPlayer === 'crossPlayer') {
                                squares[tokenMovingFrom].classList.remove('cross_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('cross')
                                crossTokens -= 1;
                                currentPlayer = 'circlePlayer';
                                displayCurrentPlayer.innerHTML = 'O';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                            if(currentPlayer === 'circlePlayer') {
                                squares[tokenMovingFrom].classList.remove('circle_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('circle')
                                circleTokens -= 1;
                                currentPlayer = 'crossPlayer';
                                displayCurrentPlayer.innerHTML = 'X';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                        }
                }
                if(tokenMovingFrom === 2) {
                        if( (i === 1) || (i === 2) || (i === 5) ) {
                            if(currentPlayer === 'crossPlayer') {
                                squares[tokenMovingFrom].classList.remove('cross_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('cross')
                                crossTokens -= 1;
                                currentPlayer = 'circlePlayer';
                                displayCurrentPlayer.innerHTML = 'O';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                            if(currentPlayer === 'circlePlayer') {
                                squares[tokenMovingFrom].classList.remove('circle_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('circle')
                                circleTokens -= 1;
                                currentPlayer = 'crossPlayer';
                                displayCurrentPlayer.innerHTML = 'X';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                        }
                }
                if(tokenMovingFrom === 3) {
                        if( (i === 0) || (i === 3) || (i === 4) || (i === 6) ) {
                            if(currentPlayer === 'crossPlayer') {
                                squares[tokenMovingFrom].classList.remove('cross_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('cross')
                                crossTokens -= 1;
                                currentPlayer = 'circlePlayer';
                                displayCurrentPlayer.innerHTML = 'O';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                            if(currentPlayer === 'circlePlayer') {
                                squares[tokenMovingFrom].classList.remove('circle_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('circle')
                                circleTokens -= 1;
                                currentPlayer = 'crossPlayer';
                                displayCurrentPlayer.innerHTML = 'X';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                        }
                }
                if(tokenMovingFrom === 4) {
                        if( (i === 1) || (i === 3) || (i === 4) || (i === 5) || (i === 7) ) {
                            if(currentPlayer === 'crossPlayer') {
                                squares[tokenMovingFrom].classList.remove('cross_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('cross')
                                crossTokens -= 1;
                                currentPlayer = 'circlePlayer';
                                displayCurrentPlayer.innerHTML = 'O';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                            if(currentPlayer === 'circlePlayer') {
                                squares[tokenMovingFrom].classList.remove('circle_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('circle')
                                circleTokens -= 1;
                                currentPlayer = 'crossPlayer';
                                displayCurrentPlayer.innerHTML = 'X';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                        }
                }
                if(tokenMovingFrom === 5) {
                        if( (i === 2) || (i === 4) || (i === 5) || (i === 8) ) {
                            if(currentPlayer === 'crossPlayer') {
                                squares[tokenMovingFrom].classList.remove('cross_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('cross')
                                crossTokens -= 1;
                                currentPlayer = 'circlePlayer';
                                displayCurrentPlayer.innerHTML = 'O';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                            if(currentPlayer === 'circlePlayer') {
                                squares[tokenMovingFrom].classList.remove('circle_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('circle')
                                circleTokens -= 1;
                                currentPlayer = 'crossPlayer';
                                displayCurrentPlayer.innerHTML = 'X';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                        }
                }
                if(tokenMovingFrom === 6) {
                        if( (i === 3) || (i === 6) || (i === 7) ) {
                            if(currentPlayer === 'crossPlayer') {
                                squares[tokenMovingFrom].classList.remove('cross_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('cross')
                                crossTokens -= 1;
                                currentPlayer = 'circlePlayer';
                                displayCurrentPlayer.innerHTML = 'O';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                            if(currentPlayer === 'circlePlayer') {
                                squares[tokenMovingFrom].classList.remove('circle_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('circle')
                                circleTokens -= 1;
                                currentPlayer = 'crossPlayer';
                                displayCurrentPlayer.innerHTML = 'X';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                        }
                }
                if(tokenMovingFrom === 7) {
                        if( (i === 4) || (i === 6) || (i === 7) || (i === 8) ) {
                            if(currentPlayer === 'crossPlayer') {
                                squares[tokenMovingFrom].classList.remove('cross_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('cross')
                                crossTokens -= 1;
                                currentPlayer = 'circlePlayer';
                                displayCurrentPlayer.innerHTML = 'O';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                            if(currentPlayer === 'circlePlayer') {
                                squares[tokenMovingFrom].classList.remove('circle_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('circle')
                                circleTokens -= 1;
                                currentPlayer = 'crossPlayer';
                                displayCurrentPlayer.innerHTML = 'X';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                        }
                }
                if(tokenMovingFrom === 8) {
                        if( (i === 5) || (i === 7) || (i === 8) ) {
                            if(currentPlayer === 'crossPlayer') {
                                squares[tokenMovingFrom].classList.remove('cross_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('cross')
                                crossTokens -= 1;
                                currentPlayer = 'circlePlayer';
                                displayCurrentPlayer.innerHTML = 'O';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                            if(currentPlayer === 'circlePlayer') {
                                squares[tokenMovingFrom].classList.remove('circle_grey');
                                squares[i].classList.add('taken')
                                squares[i].classList.add('circle')
                                circleTokens -= 1;
                                currentPlayer = 'crossPlayer';
                                displayCurrentPlayer.innerHTML = 'X';
                                tokenMoving = false;
                                tokenMovingFrom = undefined;
                                checkBoard();
                                return;
                            }
                        }
                }
        }
        if(tokenMoving === false) {
            if( (currentPlayer === 'crossPlayer') && (crossTokens >= 1) ) {
                squares[i].classList.add('taken');
                squares[i].classList.add('cross');
                crossTokens -= 1;
                currentPlayer = 'circlePlayer';
                displayCurrentPlayer.innerHTML = 'O';
                checkBoard();
                return;
            };
            if( (currentPlayer === 'circlePlayer') && (circleTokens >= 1) ) {
                squares[i].classList.add('taken');
                squares[i].classList.add('circle');
                circleTokens -= 1;
                currentPlayer = 'crossPlayer';
                displayCurrentPlayer.innerHTML = 'X';
                checkBoard();
                return;
            };
        }
    }
}}