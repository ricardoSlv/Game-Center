import React from 'react'

import styles from './Backdrop.module.css'


export default function Backdrop(props:{children:React.ReactNode}) {
    return (
        <div className={styles.backdrop}>
            {props.children}
        </div>
    )
}
