import React from 'react'

import styles from './PacmanGame.module.css'

function type(num: number) {
    let color = new Map(
        [
            [0, 'blank'],
            [1, 'block'],
            [2, 'smallBall'],
            [3, 'bigBall']
        ]
    )

    return color.get(num) || ''
}

export default function Square(props: { board: number[][], coords: [number, number], onClick?: () => void }) {

    const [l, c] = props.coords
    const blockTtype = type(props.board[l][c])
    let element = <button className={styles.pacSquare} onClick={props.onClick}></button>

    switch (blockTtype) {
        case 'blank':
            element =
                <button className={styles.pacSquare} onClick={props.onClick}/>
            break
        case 'smallBall':
            element =
                <button className={styles.pacSquare} onClick={props.onClick}>
                    <div className={styles.smallBall}></div>
                </button>
            break
        case 'bigBall':
            element =
                <button className={styles.pacSquare} onClick={props.onClick}>
                    <div className={styles.bigBall}></div>
                </button>
            break
        case 'block':
            element =
                <button className={styles.pacSquare} onClick={props.onClick}>
                    <div className={styles.midBlockPipe}></div>
                    {props.board[l - 1] && props.board[l - 1][c] === 1 && <div className={styles.topPipe}></div>}
                    {props.board[l + 1] && props.board[l + 1][c] === 1 && <div className={styles.botPipe}></div>}
                    {props.board[l][c - 1] === 1 && <div className={styles.leftPipe}></div>}
                    {props.board[l][c + 1] === 1 && <div className={styles.rightPipe}></div>}
                </button>
            break
    }
    return element
}