import React from 'react'

import HeroButton from './../HeroButon/HeroButton'
import { SnakeIcon, TetrisIcon, PacManIcon } from '../../components/Icons/Icons'

import styles from './HeroZone.module.css'

export default function Herozone() {
    return (
        <header className={styles.header}>
            <h1 className={styles.heroTitle}>Welcome to Games</h1>
            <div className={styles.sideFlex}>
                <a href="snake">
                    <SnakeIcon />
                </a>
                <a href="/tetris">
                    <TetrisIcon />
                </a>
                <a href="/pacman">
                    <PacManIcon />
                </a>
            </div>
            <h2 className={styles.heroDesc} >They kind of work but sometimes they don't</h2>
            <div className={styles.sideFlex+' '+styles.margTop}>
                <HeroButton text="Login"/>
                <HeroButton text="Signup"/>
            </div>
        </header>
    )
}
