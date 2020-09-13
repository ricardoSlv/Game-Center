import React from 'react'

import { SnakeIcon, TetrisIcon, PacManIcon } from '../../components/Icons/Icons'

import styles from './HeroZone.module.css'

export default function Herozone() {
    return (
        <header className={styles.header}>
            <h1 className={styles.heroTitle}>Welcome to games</h1>
            <div className={styles.iconFlex}>
                <SnakeIcon />
                <TetrisIcon />
                <PacManIcon />
            </div>
            <h2 className={styles.heroDesc} >They kind off work but sometimes they don't</h2>
        </header>
    )
}
