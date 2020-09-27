import React from 'react'

import NavItem from './../NavItem/NavItem'

import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.sideFlex}>
                <NavItem text='Home' link='/'/>
                <NavItem text='Get Started' link='/get-started'/>
                <NavItem text='Leaderboard' link='/leaderboard'/>
                <span>Made with React</span>
                <span>Games™ 2020</span>
                <span>
                    Leave a <span role="img" aria-label="Like">👍</span>
                </span>
                <NavItem text=' ' link='https://github.com/ricardoSlv/Game-Center' github />
            </div>
        </footer>
    )
}
