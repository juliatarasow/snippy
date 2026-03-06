import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthRoute from './AuthRouter'
import RoutesList from './routes'

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                {RoutesList.map((route, index) => {
                    const Component = route.component as React.FC
                    return route.isPrivate ? (
                        <Route
                            key={index}
                            path={route.path}
                            element={<AuthRoute Component={Component}/>}
                        />
                    ) : (
                        <Route 
                            key={index}
                            path={route.path}
                            element={<Component/>}
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}
