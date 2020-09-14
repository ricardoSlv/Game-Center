import React from 'react'

import BackGround from '../Background/Background'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

import styles from './Layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BackGround />
            <div className={styles.layoutGrid}>
                <NavBar />
                {children}
                <Footer />
            </div>
        </>
    )
}
