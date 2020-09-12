import React from 'react'

import HeroButton from '../../components/HeroButon/HeroButton'
import styles from './Welcome.module.css'


export default function Welcome() {
    return (
        <>
            <div className={styles.background} />
            <HeroButton text={'Hit me now'}/>
        </>
    )
}
