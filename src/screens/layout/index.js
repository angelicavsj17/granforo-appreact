import React from 'react'
import { Footer } from '../../components/footer/index'
import { NavBar } from '../../components/nav/index'
import IndexScreen from '../indexscreen/indexScreen'


export const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
               { children }
            <Footer />
        </>
    )
}
