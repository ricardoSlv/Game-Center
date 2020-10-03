import React, { useState, useEffect } from 'react'

import styles from './RecordPrompt.module.css'

import { gameTitle } from './../../../types'




export default function RecordPrompt(props: { game: gameTitle, map: number, score: number }) {

    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    const [qualified, setQualified] = useState(false)
    const [updating, setUpdating] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [updateStatus, setUpdateStatus] = useState('')
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
     
        e.preventDefault()
        setUpdating(true)
        try {
            const response = await fetch('./api/addrecord',
                {
                    method: 'POST',
                    body: JSON.stringify({game:props.game.toLowerCase(), name:name, map:`${props.map+1}`, score: `${props.score}` })
                })
            if (response.status !== 200){
                console.log('There was a problem. Status Code: ' + response.status);
                setUpdateStatus('There was an error, your score was not added :(')
            }
            else{
                const status = await response.json()
                console.log('Response: ',status,'\n','query: ',JSON.stringify({name:name, map:`${props.map+1}`, score: `${props.score}` }))
                if(status.updated)
                    setUpdateStatus('Congratulations, you\'re on the leaderboard!!')
                else
                    setUpdateStatus('There was an error, your score was not added :(')
            }
        }
        catch (err) {
            setUpdateStatus('There was an error, your score was not added :(')
            console.log('Error:', err);
        }
        setUpdating(false)
        setUpdated(true)
        
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch('./api/verifyrecord',
                    {
                        method: 'POST',
                        body: JSON.stringify({game:props.game.toLowerCase(), map:`${props.map+1}`, score: `${props.score}` })
                    })
                if (response.status !== 200){
                    console.log({game:props.game.toLowerCase(), map:`${props.map}`, score: `${props.score}` })
                    console.log('There was a problem. Status Code: ' + response.status)
                }
                else{
                    const responseObj = await response.json()
                    console.log(responseObj)
                    setQualified(responseObj.qualified)
                }
            }
            catch (err) {
                console.log('Error:', err)
            }
            setLoading(false)
        }
        fetchData();
        return () => { }
    }, [props.score,props.game,props.map])

    return (
        <div className={styles.wrapper}>
            {loading && <span>Loading...</span>}
            {!loading && !qualified && <span>{'You\'re not on the top 10 :('}<br />{'Better luck next time!'}</span>}
            {!loading && qualified &&
                <>
                    <p>You're in the top 10!</p>
                    {!updated && !updating &&
                        <form onSubmit={handleSubmit}>
                            <input className={styles.nameInput}
                                name="name"
                                type="text"
                                placeholder="Insert your name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }} />
                            <br />
                            <button className={styles.submitButton} type="submit">
                                Add me to leaderboard
                            </button>
                        </form>}
                    {updating && <p>Updating leaderboard...</p>}
                    {updated && <p>{updateStatus}</p>}
                </>}
        </div>
    )
}
