import React, { useEffect, useRef, useState } from 'react'

import game from './utils/game'
import useInputBuffer from '../../hooks/useInputBuffer'

import styles from './PacmanGame.module.css'

import GameWrapper from '../../components/UI/GameWrapper/GameWrapper'
import GameBoard from '../../components/UI/GameBoard/GameBoard'
import GameSideBar from '../../components/UI/GameSideBar/GameSideBar'
import Square from './Square'


function chomperAngle([L, C]: [number, number]) {
    /*
    0,1 => 0º
    0,-1 => -90º 
    1,0 => 90º
    -1,0 => -180º
    */
    if (L) {
        return 90 * L
    }
    else if (C < 0) {
        return -180
    }
    return 0
}

export default function PacmanDraw() {
    const [open, setOpen] = useState(false)
    const [, setOldId] = useState(0)
    const [updateId, setUpdateId] = useState(0)
    const [bufferid, setBufferId] = useState(0)
    let inputBuffer = useInputBuffer(bufferid)
    let [up, down, left, right] = inputBuffer

    const board = useRef((new game()))


    useEffect(() => {
        setInterval(() => {
            setUpdateId(id => id + 1)
        }, 600)
        setInterval(() => {
            setOpen(open => !open)
        }, 300)
        return () => { }
    }, [])

    useEffect(() => {
        console.log('keys', up, down, left, right)
        const status = board.current.update([down - up, right - left])
        //Reset key buffer when walking into a wall
        if (status === 'blocked') {
            setBufferId(id => id + 1)
        }
        setOldId(id => id + 1)
        return () => { }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateId])


    return (
        <GameWrapper>
            <GameBoard>
                <div className={styles.pacBackground}>
                    <div className={styles.gridContainer}>
                        {board.current.map.map((x, l) =>
                            <div className={styles.gridLine}>
                                {x.map((_, c) =>
                                    <Square
                                        board={board.current.map}
                                        coords={[l, c]}
                                    />
                                )}
                            </div>)}
                        <div className={styles.pacChomperWrapper}
                            style={{
                                top: `calc(100%* ${board.current.position[0]} / 27`,
                                left: `calc(100%* ${board.current.position[1]} / 21`,
                                transform: `rotate(${chomperAngle(board.current.direction)}deg)`
                            }}
                        >
                            <div className={open ? styles.pacChomperOpen : styles.pacChomperClosed} />
                        </div>
                    </div>
                </div>
            </GameBoard>
            <GameSideBar>
                <button onClick={() => console.log(`[${board.current.map.map(l => `\n[${l.toString()}]`)}]`)}>Print</button>
            </GameSideBar>
        </GameWrapper>
    )
}