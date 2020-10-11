/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

import { Link } from "react-router-dom";
import HeroButton from '../components/HeroButon/HeroButton'
import { SnakeIcon, TetrisIcon, PacManIcon } from '../components/Icons'

const Header = styled.header`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: snow;
    font-size: 3rem;
`
const HeroTitle = styled.h1`
    font-weight: 400;
    margin: 0px;
    padding: 0 1em;
    letter-spacing: 0.2ch;
`
const SideFlex = styled.div`
    margin-top: '1rem';
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    & > * { 
        margin: 2rem;
    }
`
const HeroDesc = styled.h2`
    font-weight: 300;
    margin: 0px;
    padding: 0 1em;
    font-size: 0.7em;
`

export default function Welcome() {
    return (
        <section>
            <Header>
                <HeroTitle>
                    Welcome to Games
            </HeroTitle>
                <SideFlex>
                    <Link to="/snake">
                        <SnakeIcon scale={1} />
                    </Link>
                    <Link to="/tetris">
                        <TetrisIcon scale={1} />
                    </Link>
                    <Link to="/pacman">
                        <PacManIcon scale={1} />
                    </Link>
                </SideFlex>
                <HeroDesc>
                    They kind of work but sometimes they don't
            </HeroDesc>
                <SideFlex>
                    <HeroButton text="Login" />
                    <HeroButton text="Signup" />
                </SideFlex>
            </Header>
        </section>
    )
}
