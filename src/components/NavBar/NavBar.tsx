import React from 'react'

import NavItem from './../NavItem/NavItem'

import styles from './NavBar.module.css'

export default function NavBar() {
    return (
            <nav className={styles.navBar}>
                <NavItem text='Home' link='/'/>
                <NavItem text='Get Started' link='/get-started'/>
                <NavItem text='Leaderboard' link='/leaderboard'/>
                <NavItem text=' ' link='https://github.com/ricardoSlv/Game-Center' github />
            </nav>
    )
}
