import React, {
    useReducer,
    useCallback,
    createContext,
    useContext,
} from 'react'
import axios from 'axios'

import { User } from 'snippy'

export const defaultState: User = {
    _id: '',
    username: 'John',
    firstname: 'John',
    profile: '',
    email: 'John@gmail.com',
    password: 'testing123',
    verify: false,
    token: '',
    snippets: [],
    savedSnippets: [],
    activities: [],
}

export type ActionType =
    | {
          type: 'SUBSCRIBE'
          email: string
          token: string
      }
    | {
          type: 'REGISTER'
          username: string
          firstname: string
          email: string
          verify: boolean
      }
    | {
          type: 'LOGIN'
          _id: string
          username: string
          profile: string
          token: string
          verify: boolean
      }
    | { type: 'LOGOUT'; token: string; verify: boolean }
    | { type: 'ERROR'; username: string; message: string; verify: boolean }

/* The useAuth function takes a initial state and a reducer with the useReducer hook */
type useAuthStateType = ReturnType<typeof useAuth>

const AuthContext = createContext<useAuthStateType>({
    state: defaultState,
    subscribeUser: () => {},
    loginUser: () => {},
    registerUser: () => {},
    logoutUser: () => {},
})

function useAuth(initialState: User): {
    state: User
    loginUser: (data: User) => void
    subscribeUser: (data: User) => void
    registerUser: (data: User) => void
    logoutUser: (e: { preventDefault(): void }) => void
} {
    const [state, dispatch] = useReducer(
        (state: User, action: ActionType): User => {
            switch (action.type) {
                case 'SUBSCRIBE':
                    return {
                        ...state,
                        email: action.email,
                        token: action.token,
                    }
                case 'REGISTER':
                    return {
                        ...state,
                        username: action.username,
                        email: action.email,
                        verify: action.verify,
                    }
                case 'LOGIN':
                    return {
                        ...state,
                        username: action.username,
                        token: action.token,
                        profile: action.profile,
                        _id: action._id,
                        verify: action.verify,
                    }
                case 'LOGOUT':
                    return {
                        ...state,
                        token: action.token,
                        verify: action.verify,
                    }
                case 'ERROR':
                    return {
                        ...state,
                        username: action.username,
                        message: action.message,
                    }

                default:
                    return defaultState
            }
        },
        initialState
    )
    const subscribeUser = useCallback((data) => {
        let body = {
            name: data.name,
            email: data.email,
        }
        let response = axios.post('http://localhost:4000/register', body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        response.then((result) => {
            if (result) {
                dispatch({
                    type: 'SUBSCRIBE',
                    email: data.email,
                    token: result.data.token,
                })
            } else {
                dispatch({
                    username: 'user',
                    type: 'ERROR',
                    message: 'invalid credentials',
                    verify: false,
                })
            }
        })
    }, [])
    const loginUser = useCallback((user) => {
        dispatch({
            type: 'LOGIN',
            _id: user._id,
            username: user.username,
            token: user.token,
            profile: user.profile,
            verify: true,
        })
    }, [])

    const registerUser = useCallback((data) => {
        const body = {
            username: data.username,
            email: data.email,
            password: data.password,
            firstname: data.firstname,
        }
        const response = axios.post('http://localhost:4000/user/register', body)
        response.then((result) => {
            dispatch({
                type: 'REGISTER',
                username: data.username,
                firstname: data.firstname,
                email: data.email,
                verify: true,
            })
        })
        response.catch((result) => {
            console.log(result)

            dispatch({
                username: 'user',
                type: 'ERROR',
                message: result.message,
                verify: false,
            })
        })
    }, [])
    const logoutUser = () => {
        dispatch({
            type: 'LOGOUT',
            token: '',
            verify: false,
        })
        sessionStorage.removeItem('Token')
        localStorage.removeItem('currentUser')
    }
    return {
        state,
        subscribeUser,
        loginUser,
        registerUser,
        logoutUser,
    }
}

/* Exported Functions to use across the app */
/* Give Current State */
export const useAuthState = (): User => {
    const { state } = useContext(AuthContext)
    return state
}

export const useSubscribe = (): useAuthStateType['subscribeUser'] => {
    const { subscribeUser } = useContext(AuthContext)
    return subscribeUser
}

export const useRegister = (): useAuthStateType['registerUser'] => {
    const { registerUser } = useContext(AuthContext)
    return registerUser
}

export const useLogin = (): useAuthStateType['loginUser'] => {
    const { loginUser } = useContext(AuthContext)
    return loginUser
}

export const useLogout = (): useAuthStateType['logoutUser'] => {
    const { logoutUser } = useContext(AuthContext)
    return logoutUser
}

export const AuthProvider: React.FunctionComponent<{
    initialState: User
}> = ({ initialState, children }) => (
    <AuthContext.Provider value={useAuth(initialState)}>
        {children}
    </AuthContext.Provider>
)
