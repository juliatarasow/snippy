import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { useAuthState } from 'auth'

interface Props {
    Component: React.FC
}

const AuthRoute = ({ Component }: Props) => {
    const state = useAuthState()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!state.verify) {
            navigate('/login', { replace: true })
        }
    }, [state.verify, navigate]);
      
    if (!state.verify) {
        return <Navigate to="/login" replace />
    }

    if (!state.verify) {
        return null
    }

    return <Component />
}

export default AuthRoute
