import React from 'react'
import BackGround from '../../components/Background/Background'
import NavBar from '../../components/NavBar/NavBar'
import HeroZone from '../../components/HeroZone/Herozone'

import styles from './Welcome.module.css'

export default function Welcome() {
    return (
        <section className={styles.welcomePage}>
            <BackGround />  
            <NavBar/>
            <HeroZone/>
            {/* <HeroButton text={'Hit me now'}/> */}
        </section>
    )
}
