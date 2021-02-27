import React from 'react'
import { Route } from 'react-router-dom'
import { ApplicationViews } from './ApplicationViews'
import { NavBar } from './nav/Navbar'

export const KandyKorner = () => {
    return (
        <>
            <NavBar />
            <ApplicationViews />
        </>
    )
}