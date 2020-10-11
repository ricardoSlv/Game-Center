/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 10px auto;
  text-align: center;
  border: 5px solid #290652;
  padding: 5px;
  border-radius: 22px;
  font-size: 2rem;
  display: flex;
  width: 70%;
  margin-bottom: 45px;
`;

export default function GameWrapper(props: { children: React.ReactNode }) {
    return (
        <Wrapper >
            {props.children}
        </Wrapper>
    )
}
