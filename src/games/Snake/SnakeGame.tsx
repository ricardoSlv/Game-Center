import React, { useState, useRef, useEffect } from 'react';

import useInputBuffer from '../../hooks/useInputBuffer'
import game from './utils/game'

import styles from './SnakeGame.module.css'

import RecordPrompt from './../../components/RecordPrompt/RecordPrompt'

type color = 'Green' | 'Red' | 'Blue' | 'Orange' | 'Snow' | 'Black' | 'Brown' | 'Gray'

const snakeMapsNumber = 4
function nexMap(map:number){
  return (map+1)%(snakeMapsNumber)
}

function Square({color, text }: {color: color, text: string }) {
  const backClass = `back${color}`
  return <span className={`${styles.gameSquare} ${styles[backClass]}`} >{text}</span>
}

function makeGameBoard(game: game) {
  const points = game.snake.points
  const [appleX, appleY] = game.apple
  const snakeDead = game.snakeIsDead
  const bricks = game.bricks

  let board = Array.from((new Array(20)), _ => ((new Array(20)).fill(<Square color='Green' text='🌲' />)))

  points.forEach(([x, y]) => board[x][y] = <Square color='Snow' text={snakeDead ? '🐕' : '🦴'} />)
  bricks.forEach(([x, y]) => board[x][y] = <Square  color='Orange' text={'🧱'} />)

  const [headX, headY] = points[0]
  const [tailX, tailY] = points[points.length - 1]

  board[appleX][appleY] = <Square color='Red' text='🍖' />
  board[headX][headY] = <Square color='Brown' text='🐶' />

  if (points.length > 2) {
    board[tailX][tailY] = <Square key={tailX*20+tailY} color='Snow' text='🐕' />
  }
  if (snakeDead) {
    board[headX][headY] = <Square key={headX*20+headY} color='Black' text='💀' />
  }
  return board
}

function SnakeGame() {
  const [Id, setId] = useState(0)
  let [up, down, left, right] = useInputBuffer(Id)
  const [map, setMap] = useState(0)
  const board = useRef((new game(map)))
  const [prevSecs, setPrevSecs] = useState(0)
  const [secs, setSecs] = useState(0)
  const [pause, setPause] = useState(false)
  const [dead, setDead] = useState(false)
  const [highScore, setHighScore] = useState([0,0,0,0])
  const renderBoard = makeGameBoard(board.current)

  useEffect(() => {
    if (secs > prevSecs + 1 / board.current.speed) { 
        board.current.update([down - up, right - left])
      const currScore=board.current.snake.length-1
      if (currScore > highScore[map]) {
        let newhighScore=[...highScore]
        newhighScore[map]=currScore
        setHighScore(newhighScore)
      }
      if (board.current.snakeIsDead) {
        setDead(true);
      }
      setPrevSecs(ps => ps + 1 / board.current.speed)
    }
  }, [secs, prevSecs, up, down, right, left, highScore,map])

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause === false && dead === false) {
        setSecs(seconds => seconds + 0.01);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [pause, dead]);

  return (
    <div className={styles.App}>
      <div className={styles.gameBackground}>
        {renderBoard}
        {pause &&
          <div className={styles.gameBackdrop}>
            <span>Game Paused</span>
          </div>}
        {dead &&
          <div className={styles.gameBackdrop}>
            <span>{'Goodbye bones :('}</span>
            <span>Your score: {board.current.snake.length-1}</span>
            <RecordPrompt game='Snake' map={map} score={board.current.snake.length-1} />
          </div>}
      </div>
      <div className={styles.sideBar}>
        <p className={styles.gameInfo}>{`Map: ${map+1}`}</p>
        <p className={styles.gameInfo}>{`Highscore: ${highScore[map]}`}</p>
        <p className={styles.gameInfo}>{`Current score: ${board.current.snake.length-1}`}</p>
        <p className={styles.gameInfo}>{secs.toFixed(0)}</p>
        <button className={styles.button}
                onClick={()=>{
                  const nextMap=nexMap(map)
                  setMap(nextMap)
                  board.current = (new game(nextMap));
                  setId(Id+1)
                  setSecs(0); setPrevSecs(0);
                  setDead(false);
                  setPause(false)
                }}>
          Next Map
        </button>
        <button className={styles.button}
          onClick={() => {
            board.current = (new game(map));
            setId(Id+1)
            setSecs(0); setPrevSecs(0);
            setDead(false);
            setPause(false)
          }}
        >
          New game
        </button>
        <button className={styles.button+' '+(board.current.snakeIsDead?styles.greyFilter:'')}
          onClick={() => { if (!dead) { setPause(p => !p) } }} >
          Pause
        </button>
        
        <div className={styles.arrowContainer}>
          <span className={styles.arrowBox} />
          <span className={`${styles.arrowBox} ${up ? styles.backBlack : styles.backGray}`}>⬆</span>
          <span className={styles.arrowBox} />
          <span className={`${styles.arrowBox} ${left ? styles.backBlack : styles.backGray}`}>⬅</span>
          <span className={`${styles.arrowBox} ${down ? styles.backBlack : styles.backGray}`}>⬇</span>
          <span className={`${styles.arrowBox} ${right ? styles.backBlack : styles.backGray}`}>➡</span>
        </div>
      </div>

    </div>
  );
}

export default SnakeGame;
