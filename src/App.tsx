import React, {useState, useRef, useEffect } from 'react';

import useInputBuffer from './hooks/useInputBuffer'
import game from './utils/game'

type point = [number,number]

function makeGameBoard(points:point[],[appleX,appleY]:point){
  let board = Array.from((new Array(20)),a=>((new Array(20)).fill(<span style={{backgroundColor: 'blue'}}>{'__'}</span>)))
  points.forEach(([x,y])=>board[x][y]=<span style={{backgroundColor: 'green'}} >{'__'}</span>)
  board[appleX][appleY]=<span style={{backgroundColor: 'red'}} >{'__'}</span>
  board = board.reverse()
  return board
}

function App() {
  let [up,down,left,right] = useInputBuffer().map(x=>x?1:0)
  const board = useRef((new game(20,20)))
  const [prevSecs, setPrevSecs] = useState(0)
  const [secs, setSecs] = useState(0)
  const renderBoard = makeGameBoard(board.current.snake.points,board.current.apple)

  useEffect(() => {
    if(secs>prevSecs+1/board.current.speed){
      console.log('game updated',prevSecs,secs)
      board.current.update([up-down,right-left])
      setPrevSecs(ps=>ps+1/board.current.speed)
    }
  },[secs, prevSecs, up, down, right, left])

  useEffect(() => {
    console.log('timeout set')
    const interval = setInterval(() => {
      setSecs(seconds => seconds + 0.01);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      <header >
        {renderBoard.map(l=>l.concat(<br></br>))}
        <p>{up-down}</p>
        <p>{right-left}</p>
        <p>{secs.toFixed(2)}</p>
        <button onClick={()=>{board.current=(new game(20,20));setSecs(0);setPrevSecs(0)}} >New game</button>
      </header>
    </div>
  );
}

export default App;
