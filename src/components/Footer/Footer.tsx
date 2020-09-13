import React from 'react'

import NavItem from './../NavItem/NavItem'

import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.sideFlex}>
                <NavItem text='Features' href='#features'/>
                <NavItem text='Get Started' href='#get-started'/>
                <NavItem text='Account?' href='#account'/>
                <span>Made with React</span>
                <span>Games™ 2020</span>
                <span>
                    Leave a <span role="img" aria-label="Like">👍</span>
                </span>
                <NavItem text=' ' href='https://github.com/brunosimon/keppler' github />
            </div>
        </footer>
    )
}
