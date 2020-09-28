import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'


export default function Leaderboard() {
    let [snakeLeaderboards, setSnakeLeaderBoards]: [{ name: string, score: number }[][], React.Dispatch<React.SetStateAction<any>>] = useState([[]])
    useEffect(() => {
        async function fetchData() {
            const query = {}
            let snakeboards: any[] = []
            try {
                //const response = await fetch('./api/leaderboard?' + new URLSearchParams(query))
                const response = await fetch('./api/leaderboard',
                    {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' },
                        redirect: 'follow'
                    })
                console.log(response)
                if (response.status !== 200)
                    console.log('There was a problem. Status Code: ' + response.status);
                else
                    snakeboards = await response.json()
            }
            catch (err) {
                console.log('Error:', err);
            }
            console.log(snakeboards)
            setSnakeLeaderBoards(snakeboards)
        }
        fetchData();
        return () => { }
    }, [])
    return (
        <div>
            <h1>Leaderboard</h1>
            {snakeLeaderboards.map((l, i) => <>
                <h3>Map:{` ${i}`}</h3>
                {l.map(x => <p>{`${x.name} ${x.score}`}</p>)}
            </>)}
        </div>
    )
}
