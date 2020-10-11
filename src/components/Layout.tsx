/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from "@emotion/styled";

import BackGround from './UI/Background'
import NavBar from './NavBar'
import Footer from './Footer'
import React from 'react'

const LayoutGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 70px calc(100vh - 115px) 45px;
`;


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            <BackGround />
            <LayoutGrid >
                <NavBar />
                {children}
                <Footer />
            </LayoutGrid>
        </React.Fragment>
    )
}
