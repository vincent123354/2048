import { useEffect, useRef, useState } from 'react'
import { GAME_SIZE, addSquare, initBoard } from '../utils.jsx';
import Square from './Square.jsx';

export default function Board() {
    const [board, setBoard] = useState(initBoard({}));
    const movedBoard = useRef([]);

    useEffect(() => {
        const handleKey = (e) => {
            switch(e.key) {
                case 'w':
                    handleMove('up');
                    break;
                case 'a':
                    handleMove('left');
                    break;
                case 's':
                    handleMove('down');
                    break;
                case 'd':
                    handleMove('right');
                    break;
                default:
                    break;
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("keydown", handleKey);
        };
    }, [board]);

    function handleMove(dir) {
        function updateTarget() {
            switch (dir) {
                case 'up':
                    target += GAME_SIZE;
                    break;
                case 'down':
                    target -= GAME_SIZE;
                    break;
                case 'left':
                    target += 1;
                    break;
                case 'right':
                    target -= 1;
                    break;
                default:
                    break;
            }
        }
        let nextBoard = JSON.parse(JSON.stringify(board));
        movedBoard.current = [];
        let target;
        for (let i = 0; i < GAME_SIZE; i++) {
            for (let j = 0; j < GAME_SIZE; j++) {
                let curr;
                switch (dir) {
                    case 'up':
                        curr = i + j * GAME_SIZE;
                        if (curr == i) {
                            target = curr;
                        }
                        break;
                    case 'down':
                        curr = i + (GAME_SIZE - j - 1) * GAME_SIZE;
                        if (curr == GAME_SIZE * (GAME_SIZE-1) + i) {
                            target = curr;
                        }
                        break;
                    case 'left':
                        curr = i * GAME_SIZE + j;
                        if (curr % GAME_SIZE == 0) {
                            target = curr;
                        }
                        break;
                    case 'right':
                        curr = (i+1) * GAME_SIZE - j - 1;
                        if (curr % GAME_SIZE == GAME_SIZE - 1) {
                            target = curr;
                        }
                        break;
                    default:
                        break;
                }
                if (nextBoard[curr] === 0 || target === curr) {
                    continue;
                }
                
                if (nextBoard[curr] === nextBoard[target]) {
                    nextBoard[target] *= 2;
                    nextBoard[curr] = 0;
                    updateTarget();
                    movedBoard.current.push(curr, target);
                }
                else if (nextBoard[target] === 0) {
                    nextBoard[target] = nextBoard[curr];
                    nextBoard[curr] = 0;
                    movedBoard.current.push(curr, target);
                }
                else if (nextBoard[curr] !== nextBoard[target]) {
                    updateTarget();
                    if (target === curr) {
                        continue;
                    }
                    nextBoard[target] = nextBoard[curr];
                    nextBoard[curr] = 0;
                    movedBoard.current.push(curr, target);
                }
            }
        }
        movedBoard.current.length > 0 ? setBoard(addSquare(nextBoard)) : setBoard(nextBoard);
    }
  
    return (
        <>
            <div className='container'>
                {
                    Object.entries(board).map(([k, v], i) => {
                        return <Square key={i} loc={k} num={v}></Square>
                    })
                }
            </div>
            <button onClick={() => {handleMove('left');}}>left</button>
            <button onClick={() => handleMove('right')}>right</button>
            <button onClick={() => handleMove('up')}>up</button>
            <button onClick={() => handleMove('down')}>down</button>
        </>
    )
}