import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'


export default function Leaderboard() {
    let [snakeLeaderboards, setSnakeLeaderBoards]: [{ name: string, score: number }[][], React.Dispatch<React.SetStateAction<any>>] = useState([[]])
    useEffect(() => {
        async function fetchData() {
            //const snakeboards = await getSnakeLeaderboards()
            const snakeboards ='hello'
            console.log(snakeboards)
            setSnakeLeaderBoards(snakeboards)
        }
        fetchData();
        return () => { }
    },[])
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
