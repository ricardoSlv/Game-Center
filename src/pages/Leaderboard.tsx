/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

type leaderboardDoc = { _id: string, game: string, map: number, leaderboard: Array<{ name: string, score: string }> }

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Title = styled.h1`
    font-size: 2.5em;
    margin: 0.5em;
    text-align: center;
`

const ScoreItem = styled.p`
    padding-left: 0.5em;
    letter-spacing: 0.07ch;
    padding-bottom: 0.3em;
    font-size: 1.05em;
`

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
        <section css={{ fontSize: '1.5rem' }}>
            <Title>Leaderboard</Title>
            <Container>
                {snakeLeaderboards.map((l) => <div >
                    {
                        <div>
                            <h2>{`${l.game.replace(/^./, l.game.charAt(0).toUpperCase())} Map: ${l.map}`}</h2>
                            {l.leaderboard &&
                                l.leaderboard.map(k =>
                                    <ScoreItem>
                                        {`${k.name}: ${k.score}`}
                                    </ScoreItem>)
                            }
                        </div>
                    }
                </div>)}
            </Container>
        </section>
    )
}
