import React from 'react'

import styles from './NavBar.module.css'

export default function NavBar() {
    return (
            <nav className={styles.navBar}>
            <a className={styles.item+' '+styles.underline} href="#features">Features</a>
            <a className={styles.item+' '+styles.underline} href="#get-started">Get started</a>
            <a className={styles.item+' '+styles.underline} href="#whos-using-it">Who's using it?</a>
            <a className={styles.item+' '+styles.underline+' '+styles.github} href="https://github.com/brunosimon/keppler">{' '}</a>
            </nav>
    )
}
