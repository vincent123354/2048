export const GAME_SIZE = 4;
export const COLOR = {
    2: 'rgb(238, 228, 218)',
    4: 'rgb(238, 225, 201)',
    8: 'rgb(243, 178, 122)',
    16: 'rgb(246, 150, 100)',
    32: 'rgb(247, 124, 95)',
    64: 'rgb(247, 95, 59)',
    128: 'rgb(247, 95, 59)',
    256: 'rgb(237, 208, 115)',
};
export function initBoard() {
    let numInit = getRandomInt(2,3);
    let tmpBoard = {};
    for (let i = 0; i < GAME_SIZE * GAME_SIZE; i++) {
        tmpBoard[i] = 0;
    }
    console.log("Init with : ", numInit);
    while (numInit != 0) {
        const [x, y] = getRandomCoord(tmpBoard);
        tmpBoard[coordToInt(x, y)] = 2;
        numInit--;
    }
    return tmpBoard;
}

function getRandomInt(min, max) {
    min = Math.ceil(min); // inclusive
    max = Math.floor(max); // exclusive
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomCoord(board) {
    let emptyBox = getEmptyBox(board);
    return intToCoord(emptyBox[getRandomInt(0, emptyBox.length)]);
}

function getEmptyBox(board) {
    var emptyCoord = []
    for (let i = 0; i < GAME_SIZE * GAME_SIZE; i++) {
        if (board[i] == 0) {
            emptyCoord.push(i);
        }        
    }
    return emptyCoord;
}

function intToCoord(i) {
    return [Math.floor(i / GAME_SIZE), i % GAME_SIZE];
}

function coordToInt(x, y) {
    return x * GAME_SIZE + y;
}

export function addSquare(board) {
    let [x, y] = getRandomCoord(board);
    board[coordToInt(x, y)] = 2;
    return board;
}