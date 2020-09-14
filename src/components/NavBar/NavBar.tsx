import React from 'react'

import NavItem from './../NavItem/NavItem'

import styles from './NavBar.module.css'

export default function NavBar() {
    return (
            <nav className={styles.navBar}>
                <NavItem text='Games' href='#games'/>
                <NavItem text='Get Started' href='#get-started'/>
                <NavItem text='Account?' href='#account'/>
                <NavItem text=' ' href='https://github.com/brunosimon/keppler' github />
            </nav>
    )
}
