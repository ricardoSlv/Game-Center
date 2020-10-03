import React from 'react'

import styles from './GameSideBar.module.css'

export default function GameWrapper(props:{children:React.ReactNode}) {
    return (
        <div className={styles.sideBar}>
            {props.children}
        </div>
    )
}
