/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from "@emotion/styled";

const BackGround = styled.div`
  background-image: linear-gradient(135deg, #290652, #278696);
  background-color: initial;
  box-shadow: #305e8266 0px 0px 50px;
  position: absolute;
  top: -10vh;
  left: 0;
  width: 100%;
  height: calc(100% + 10vh);
  z-index: -1;
  background: linear-gradient(135deg,#330867,#31a7bb);
`;

export default function Background() {
    return <BackGround />
}
