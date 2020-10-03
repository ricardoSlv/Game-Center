import React, { useRef, useEffect, useReducer } from 'react';

import useInputBuffer from '../../hooks/useInputBuffer'
import game from './utils/game'

import styles from './SnakeGame.module.css'

import RecordPrompt from './../../components/RecordPrompt/RecordPrompt'
import GameWrapper from './../../components/UI/GameWrapper/GameWrapper'
import GameSideBar from './../../components/UI/GameSideBar/GameSideBar'
import Backdrop from './../../components/UI/Backdrop/Backdrop'

type color = 'Green' | 'Red' | 'Blue' | 'Orange' | 'Snow' | 'Black' | 'Brown' | 'Gray'

type gameState = {
  id: number,
  prevMoveId: number,
  moveId: number,
  map: number,
  dead: boolean,
  pause: boolean,
  highscore: Array<number>
}

const initialState: gameState = {
  id: 0,
  moveId: 0,
  prevMoveId: 0,
  map: 0,
  dead: false,
  pause: false,
  highscore: [0, 0, 0, 0]
}

type gameAction = 'UpdateMove' | 'Move' | 'Pause' | 'NewGame' | 'NextMap'

const snakeMapsNumber = 4

function nexMap(map: number) {
  return (map + 1) % (snakeMapsNumber)
}

function Square({ color, text }: { color: color, text: string }) {
  const backClass = `back${color}`
  return <span className={`${styles.gameSquare} ${styles[backClass]}`} >{text}</span>
}

function ArrowBox(props: { input: Array<number> }) {
  const [up, down, left, right] = props.input
  return (
    <div className={styles.arrowContainer}>
      <span className={styles.arrowBox} />
      <span className={`${styles.arrowBox} ${up ? styles.backBlack : styles.backGray}`}>⬆</span>
      <span className={styles.arrowBox} />
      <span className={`${styles.arrowBox} ${left ? styles.backBlack : styles.backGray}`}>⬅</span>
      <span className={`${styles.arrowBox} ${down ? styles.backBlack : styles.backGray}`}>⬇</span>
      <span className={`${styles.arrowBox} ${right ? styles.backBlack : styles.backGray}`}>➡</span>
    </div>
  )
}

function makeGameBoard(game: game) {
  const points = game.snake.points
  const [appleX, appleY] = game.apple
  const snakeDead = game.snakeIsDead
  const bricks = game.bricks

  let board = Array.from((new Array(20)), _ => ((new Array(20)).fill(<Square color='Green' text='🌲' />)))

  points.forEach(([x, y]) => board[x][y] = <Square color='Snow' text={snakeDead ? '🐕' : '🦴'} />)
  bricks.forEach(([x, y]) => board[x][y] = <Square color='Orange' text={'🧱'} />)

  const [headX, headY] = points[0]
  const [tailX, tailY] = points[points.length - 1]

  board[appleX][appleY] = <Square color='Red' text='🍖' />
  board[headX][headY] = <Square color='Brown' text='🐶' />

  if (points.length > 2) {
    board[tailX][tailY] = <Square key={tailX * 20 + tailY} color='Snow' text='🐕' />
  }
  if (snakeDead) {
    board[headX][headY] = <Square key={headX * 20 + headY} color='Black' text='💀' />
  }
  return board
}

function gameStateReducer(state: gameState, { board, inputBuffer, action }: { board: React.MutableRefObject<game>, inputBuffer?: Array<number>, action: gameAction }): gameState {

  let newState = { ...state }
  const { id, moveId, prevMoveId, map, dead, pause, highscore } = newState

  let [up, down, left, right] = [0, 0, 0, 0]
  if (typeof (inputBuffer) === 'object')
    [up, down, left, right] = inputBuffer

  switch (action) {
    case 'UpdateMove':
      if (pause === false && dead === false)
        newState.moveId = moveId + 1
      break
    case 'Move':
      if (moveId !== prevMoveId) {
        board.current.update([down - up, right - left])
        const currScore = board.current.snake.length - 1

        if (currScore > highscore[map]) {
          let newhighScore = [...highscore]
          newhighScore[map] = currScore
          newState.highscore = newhighScore
        }
        if (board.current.snakeIsDead)
          newState.dead = true;
        newState.prevMoveId = moveId
      }
      break
    case 'Pause':
      if (!newState.dead)
        newState.pause = !pause
      break
    case 'NewGame':
      newState.id = id + 1
      newState.dead = false
      newState.pause = false
      board.current = (new game(map))
      break
    case 'NextMap':
      newState.id = id + 1
      newState.dead = false
      newState.pause = false
      const nextMap = nexMap(map)
      board.current = (new game(nextMap))
      newState.map = nextMap
      break
  }

  return newState
}

function SnakeGame() {

  const [state, dispatch] = useReducer(gameStateReducer, initialState)
  const { id, moveId, map, dead, pause, highscore } = state
  const board = useRef((new game(map)))
  let inputBuffer = useInputBuffer(id)
  let [up, down, left, right] = inputBuffer

  const renderBoard = makeGameBoard(board.current)

  useEffect(() => {
    dispatch({ board, inputBuffer: [up, down, left, right], action: 'Move' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moveId])

  useEffect(() => {
    console.log('effect ran')
    let timeout: NodeJS.Timeout;
    if (pause === false && dead === false) {
      timeout = setTimeout(() => {
        dispatch({ board, action: 'UpdateMove' })
      }, 1000 / board.current.speed);
    }
    return () => { clearTimeout(timeout) };
  }, [moveId, pause, dead]);

  return (
    <GameWrapper>
      {/* Board */}
      <div className={styles.gameBackground}>
        {renderBoard}
        {pause &&
          <Backdrop>
            <span>Game Paused</span>
          </Backdrop>}
        {dead &&
          <Backdrop>
            <span>{'Goodbye bones :('}</span>
            <span>Your score: {board.current.snake.length - 1}</span>
            <RecordPrompt game='Snake' map={map} score={board.current.snake.length - 1} />
          </Backdrop>}
      </div>
      {/* Sidebar */}
      <GameSideBar>
        <p className={styles.gameInfo}>{`Map: ${map + 1}`}</p>
        <p className={styles.gameInfo}>{`Highscore: ${highscore[map]}`}</p>
        <p className={styles.gameInfo}>{`Current score: ${board.current.snake.length - 1}`}</p>
        <p className={styles.gameInfo}>{`${moveId.toFixed(0)}m `}</p>
        <button className={styles.button}
          onClick={() => {
            dispatch({ board, inputBuffer, action: 'NextMap' })
          }}>
          Next Map
        </button>
        <button className={styles.button}
          onClick={() => dispatch({ board, inputBuffer, action: 'NewGame' })}
        >
          New game
        </button>
        <button className={styles.button + ' ' + (board.current.snakeIsDead ? styles.greyFilter : '')}
          onClick={() => dispatch({ board, inputBuffer, action: 'Pause' })} >
          Pause
        </button>
        <ArrowBox input={[up, down, left, right]} />
      </GameSideBar>
    </GameWrapper>
  );
}

export default SnakeGame;
