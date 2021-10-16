import React from 'react'
import * as Cookies from 'js-cookie'

export const getSessionCookie: any = () => {
    const sessionCookie = Cookies.get('session')
    if (sessionCookie === undefined) {
        return null
    } else {
        return sessionCookie
    }
}

export const SessionContext = React.createContext(getSessionCookie())

export const setSessionCookie = (session: any): void => {
    Cookies.remove('session')
    Cookies.set('session', session, { expires: 14, path: '/' })
}
