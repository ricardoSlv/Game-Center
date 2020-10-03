import React, { useEffect, useState } from 'react'

import styles from './Leaderboard.module.css'

type leaderboardDoc = { _id: string, game: string, map: number, leaderboard: Array<{ name: string, score: string }> }

export default function Leaderboard() {

    let [snakeLeaderboards, setSnakeLeaderBoards] = useState<Array<leaderboardDoc>>([])
    useEffect(() => {
        async function fetchData() {
            const query = {}
            let snakeboards: any[] = []
            try {
                const response = await fetch('./api/leaderboard',
                    {
                        method: 'POST',
                        body: JSON.stringify(query)
                    })
                if (response.status !== 200)
                    console.log('There was a problem. Status Code: ' + response.status);
                else
                    snakeboards = await response.json()
            }
            catch (err) {
                console.log('Error:', err);
            }
            setSnakeLeaderBoards(snakeboards)
        }
        fetchData();
        return () => { }
    }, [])
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Leaderboard</h1>
            <div className={styles.container}>
                {snakeLeaderboards.map((l) => <div >
                    {
                        <div>
                            <h2>{`${l.game.replace(/^./, l.game.charAt(0).toUpperCase())} Map: ${l.map}`}</h2>
                            {l.leaderboard &&
                                l.leaderboard.map(k =>
                                    <p className={styles.scoreItem}>
                                        {`${k.name}: ${k.score}`}
                                    </p>)
                            }
                        </div>
                    }
                </div>)}
            </div>
        </section>
    )
}
