import React from 'react'
import {
    RouteComponentProps,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import AuthRoute from './AuthRouter'
import Routes from './routes'

export const AppRouter = () => {

    return (
        <Router>
            <Switch>
                {Routes.map((route, index) => (
                    <AuthRoute
                        key={index}
                        path={route.path}
                        isPrivate={route.isPrivate}
                        exact
                        Component={
                            route.component as unknown as React.FC<
                                RouteComponentProps<{}>
                            >
                        }
                    />
                ))}
            </Switch>
        </Router>
    )
}
