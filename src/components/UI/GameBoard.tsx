/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from "@emotion/styled";

const Gameboard = styled.div`
  position: relative;
  width: 80%;
  border-radius: 22px;
  margin-right: 10px;
  overflow: hidden;
`;

export default function GameBoard(props: { children: React.ReactNode }) {
    return (
        <Gameboard >
            {props.children}
        </Gameboard>
    )
}
