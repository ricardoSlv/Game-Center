/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

function type(num: number) {
    let color = new Map(
        [
            [0, 'blank'],
            [1, 'block'],
            [2, 'smallBall'],
            [3, 'bigBall']
        ]
    )
    return color.get(num) || ''
}

const PacSquare = styled.button`
    border: none;
    outline: none;
    height: 100%;
    width: calc(100% / 21);
    background-color: rgba(0, 0, 0, 0);
    display: block;
    position: relative;
    padding: 0;
`
const SmallBall = styled.div`
    position: absolute;
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background-color: yellow;
`

const BigBall = styled.div`
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 8px);
    border-radius: 50%;
    height: 16px;
    width: 16px;
    background-color: yellow;
`

const MidBlockPipe = styled.div`
    position: absolute;
    top: calc(50% - 7px);
    left: calc(50% - 7px);
    height: 14px;
    width: 14px;
    border: 3px solid blue;
`

const TopPipe = styled.div`
    position: absolute;
    background-color: blue;
    top: 0;
    left: calc(50% - 7px);
    height: calc(50% - 7px);
    width: 14px;
`
const BotPipe = styled.div`
    position: absolute;
    background-color: blue;
    bottom: 0;
    left: calc(50% - 7px);
    height: calc(50% - 7px);
    width: 14px;
`

const LeftPipe = styled.div`
    position: absolute;
    background-color: blue;
    left: 0;
    top: calc(50% - 7px);
    height: 14px;
    width: calc(50% - 7px);
`
const RightPipe = styled.div`
    position: absolute;
    background-color: blue;
    right: 0;
    top: calc(50% - 7px);
    height: 14px;
    width: calc(50% - 7px);
`


export default function Square(props: { board: number[][], coords: [number, number], onClick?: () => void }) {

    const [l, c] = props.coords
    const blockType = type(props.board[l][c])
    let element = <PacSquare onClick={props.onClick}></PacSquare>

    switch (blockType) {
        case 'blank':
            element =
                <PacSquare onClick={props.onClick}></PacSquare>
            break
        case 'smallBall':
            element =
                <PacSquare onClick={props.onClick}>
                    <SmallBall />
                </PacSquare>
            break
        case 'bigBall':
            element =
                <PacSquare onClick={props.onClick}>
                    <BigBall />
                </PacSquare>
            break
        case 'block':
            element =
                <PacSquare onClick={props.onClick}>
                    <MidBlockPipe/>
                    {props.board[l - 1] && props.board[l - 1][c] === 1 && <TopPipe />}
                    {props.board[l + 1] && props.board[l + 1][c] === 1 && <BotPipe />}
                    {props.board[l][c - 1] === 1 && <LeftPipe />}
                    {props.board[l][c + 1] === 1 && <RightPipe />}
                </PacSquare>
            break
    }
    return element
}