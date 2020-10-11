/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

import NavItem from './NavItem/NavItem'

const Nav = styled.nav`
    display: flex;
    font-size: 17px;
    align-items: center;
    justify-content: flex-end;
    padding: 25px 65px 25px 45px;
    font-weight: 300;
    letter-spacing: 0.07ch;
`

export default function NavBar() {
    return (
            <Nav>
                <NavItem text='Home' link='/'/>
                <NavItem text='Get Started' link='/get-started'/>
                <NavItem text='Leaderboard' link='/leaderboard'/>
                <NavItem text=' ' link='https://github.com/ricardoSlv/Game-Center' github />
            </Nav>
    )
}
