import React, { useState } from 'react'

import {initialMap} from '../utils/game'

import styles from './../PacmanGame.module.css'

import GameWrapper from '../../../components/UI/GameWrapper/GameWrapper'
import GameBoard from '../../../components/UI/GameBoard/GameBoard'
import GameSideBar from '../../../components/UI/GameSideBar/GameSideBar'
import Square from '../Square'


function dup(arr: number[][]) {
    return arr.map(x => x.map(e => e))
}

export default function PacmanDraw() {
    const [board, setBoard] = useState<number[][]>(initialMap)
    return (
        <GameWrapper>
            <GameBoard>
                <div className={styles.pacBackground}>
                    <div className={styles.gridContainer}>
                        {board.map((x, l) =>
                            <div className={styles.gridLine}>
                                {x.map((_, c) =>
                                    <Square
                                        board={board}
                                        coords={[l, c]}
                                        onClick={() => {
                                            let newBoard = dup(board)
                                            newBoard[l][c] = (newBoard[l][c] + 1) % 4
                                            setBoard(newBoard)
                                        }}
                                    />
                                )}
                            </div>)}
                    </div>
                </div>
            </GameBoard>
            <GameSideBar>
                <button onClick={() => console.log(`[${board.map(l => `\n[${l.toString()}]`)}]`)}>Print</button>
            </GameSideBar>
        </GameWrapper>
    )
}
