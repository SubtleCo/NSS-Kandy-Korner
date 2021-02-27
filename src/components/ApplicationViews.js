import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './Home'
import { LocationList } from './locations/LocationList'
import { LocationProvider } from './locations/LocationProvider'

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
}