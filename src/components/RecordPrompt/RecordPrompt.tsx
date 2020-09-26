import React, { useState,useEffect } from 'react'

import styles from './RecordPrompt.module.css'

import {gameTitle} from './../../../types'


function handleSubmit(e: React.SyntheticEvent) {
    const form = (e.target as HTMLFormElement)
    const name = (form.name as unknown as HTMLInputElement)
    console.log(name)
    e.preventDefault()
}

export default function RecordPrompt(props:{game:gameTitle,score:number}) {
    const [name, setName] = useState('')

    useEffect(() => {
        
        return () => {
        }
    }, )

    return (
        <div className={styles.wrapper}>
            <span>You're in the top 10!</span>
            <form onSubmit={handleSubmit}>
                <input className={styles.nameInput}
                    name="name" 
                    type="text"
                    placeholder="Insert your name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <br/>
                <button className={styles.submitButton} type="submit">
                    Add me to leaderboard
                </button>
            </form>
        </div>
    )
}
