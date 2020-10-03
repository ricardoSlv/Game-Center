import React from 'react'

import styles from './GameBoard.module.css'

export default function GameBoard(props:{children: React.ReactNode}) {
    return (
        <div className={styles.gameBoard}>
            {props.children}
        </div>
    )
}
