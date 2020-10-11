/** @jsx jsx */
import { jsx } from '@emotion/core'

import NavItem from './NavItem/NavItem'
import styled from "@emotion/styled";


const FooterWrapper = styled.footer`
  width: 100%;
  padding-bottom: 5px;
  background: linear-gradient(0deg,rgb(51, 8, 103,0.4),rgb(49, 165, 185,0.005));
`;
const ItemFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default function Footer() {
    return (
        <FooterWrapper >
            <ItemFlex >
                <NavItem text='Home' link='/'/>
                <NavItem text='Get Started' link='/get-started'/>
                <NavItem text='Leaderboard' link='/leaderboard'/>
                <span>Made with React</span>
                <span>Games™ 2020</span>
                <span>
                    Leave a <span role="img" aria-label="Like">👍</span>
                </span>
                <NavItem text=' ' link='https://github.com/ricardoSlv/Game-Center' github />
            </ItemFlex>
        </FooterWrapper>
    )
}
