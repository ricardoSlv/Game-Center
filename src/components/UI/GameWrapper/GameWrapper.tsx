import React from 'react'

import styles from './GameWrapper.module.css'

export default function GameWrapper(props:{children:React.ReactNode}) {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}
