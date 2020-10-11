/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const BackDrop = styled.div`
    display:flex;
    align-items:center;
    flex-flow: column;
    justify-content: center;
    font-size:3rem;
    color:white;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    z-index:5;
    background-color:rgb(0,0,0,0.4);
`

export default function Backdrop(props: { children: React.ReactNode }) {
    return (
        <BackDrop>
            {props.children}
        </BackDrop>
    )
}
