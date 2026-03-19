import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { customSystem } from 'Styles/theme .js'
import './Styles/Fonts.tsx'

import { AuthProvider, useAuthState } from './auth'

import { AppRouter } from './AppRouter'
import { SnipProvider } from 'useReactive'
import useReadLocalStorage from './Hooks/useReadlocalStorage'

import { User } from 'snippy'


export const App = () => {
    const state = useAuthState()
    const user = useReadLocalStorage<User>('user')
    return (
        <AuthProvider initialState={(user as User) || state}>
            <SnipProvider>
                <ChakraProvider value={customSystem}>
                    <AppRouter />
                </ChakraProvider>
            </SnipProvider>
        </AuthProvider>
    )
}
