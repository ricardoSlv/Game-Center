import React from 'react'


import BackGround from '../Background/Background'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function Layout({children}:{children:React.ReactNode}) {
    return (
        <>
            <BackGround />  
            <NavBar/>
            {children}
            <Footer/>
            
        </>
    )
}
