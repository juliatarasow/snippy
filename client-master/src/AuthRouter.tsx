import React, { useState } from 'react'
import { RouteComponentProps, Route, useLocation } from 'react-router-dom'
import { useAuthState } from 'auth'

import NavbarComponent from 'components/Shared/Navbar'
import LoginPage from 'components/Login'
import { Progress } from '@chakra-ui/react'
interface Props {
    Component: React.FC<RouteComponentProps>
    path: string
    exact?: boolean
    isPrivate: boolean
}
/* START HERE  */
const AuthRoute = ({
    Component,
    path,
    exact = false,
    isPrivate,
    ...props
}: Props): JSX.Element => {

    const [loading, setLoading] = useState(false)
    const state = useAuthState()
        let location = useLocation();
        React.useEffect(() => {
         setLoading(true)
         setTimeout(() => {
             setLoading(false)
             
         }, 2000)
        }, [location]);
      

    return (
        <>
            {isPrivate ? (
                <Route
                    path={path}
                    render={(props) => {
                        return state.verify ? (
                            <>
                                {' '}
                                <NavbarComponent />
                                { loading ? 
                                    <Progress size="xs" isIndeterminate colorScheme="twitter" />
                                    : <Progress size="xs" isIndeterminate />
                                }
                                <Component {...props} />
                            </>
                        ) : (
                            <LoginPage />
                        )
                    }}
                />
            ) : (
                <Route
                    path={path}
                    render={(props) => (
                        <>
                            <Component {...props} />
                        </>
                    )}
                />
            )}
        </>
    )
}

export default AuthRoute
