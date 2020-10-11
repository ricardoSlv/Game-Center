/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from "@emotion/styled";

const SideBar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
`;

export default function GameWrapper(props: { children: React.ReactNode }) {
    return (
        <SideBar>
            {props.children}
        </SideBar>
    )
}
