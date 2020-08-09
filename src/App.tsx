import React, {useState, useRef, useEffect } from 'react';

import useInputBuffer from './hooks/useInputBuffer'
import game from './utils/game'

type point = [number,number]

function makeGameBoard(points:point[],[appleX,appleY]:point,snakeDead:boolean){
  console.log(points,snakeDead)
  let board = Array.from((new Array(20)),a=>((new Array(20)).fill(<span style={{backgroundColor: 'green',display:'block',width:'5%',height:'fit-content'}}>{'🌲'}</span>)))
  points.forEach(([x,y])=>board[x][y]=<span style={{backgroundColor:'snow' , borderRadius:'10px',display:'block',width:'5%',height:'auto'}} >{'🦴'}</span>)
  board[appleX][appleY]=<span style={{backgroundColor: 'red',borderRadius:'10px',display:'block',width:'5%',height:'auto'}} >{'🍖'}</span>
  
  const [headX,headY]=points[0]
  board[headX][headY]=<span style={{backgroundColor: 'brown',borderRadius:'10px',display:'block',width:'5%',height:'auto'}} >{'🐶'}</span>
  if(snakeDead){
    board[headX][headY]=<span style={{backgroundColor: 'black',borderRadius:'10px',display:'block',width:'5%',height:'auto'}} >{'💀'}</span>
  }
  return board
}

function App() {
  let [up,down,left,right] = useInputBuffer().map(x=>x?1:0)
  const board = useRef((new game(20,20)))
  const [prevSecs, setPrevSecs] = useState(0)
  const [secs, setSecs] = useState(0)
  const [pause, setPause] = useState(false)
  const [dead, setDead] = useState(false)
  const renderBoard = makeGameBoard(board.current.snake.points,board.current.apple,board.current.snakeIsDead)

  useEffect(() => {
    if(secs>prevSecs+1/board.current.speed){
      board.current.update([down-up,right-left])
      if(board.current.snakeIsDead){
        setDead(true);
      }
      setPrevSecs(ps=>ps+1/board.current.speed)
    }
  },[secs, prevSecs, up, down, right, left])

  useEffect(() => {
    console.log('timeout set')
    const interval = setInterval(() => {
      if(pause===false&&dead===false){
        setSecs(seconds => seconds + 0.01);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [pause,dead]);

  return (
        <div style={{margin:'10px auto',textAlign:'center',padding:'2px',border:'3px solid black',fontSize:'2rem',display:'flex',width:'60%'}}>
          <div style={{backgroundColor:'green',display:"flex",width:'100%',flexWrap:'wrap'}}>
          {renderBoard}
          </div>
          <div>
          <span>{`Current score: ${board.current.snake.length}`}</span>
          <br/>
          <span>{secs.toFixed(2)}</span>
          <br/>
          <button onClick={()=>{board.current=(new game(20,20));setSecs(0);setPrevSecs(0);setDead(false);setPause(false)}} >New game</button>
          <button onClick={()=>setPause(p=>!p)} >Pause</button>  <p>{up-down}</p>
        <p>{right-left}</p>
          </div>
          
        </div>
  );
}

export default App;
