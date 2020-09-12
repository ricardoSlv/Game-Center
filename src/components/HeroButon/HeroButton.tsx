import React from 'react'

import styles from './HeroButton.module.css'


export default function HeroButton({text}:{text:string}) {
    return (
        <>
            <a className={styles.getStartedButton} href="#get-started">
                <span className={styles.out}>{text}</span>
                <span className={styles.hover}>
                    <span className={styles.inner}>{text}</span>
                </span>
            </a>
        </>
    )
}
