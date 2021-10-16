import * as React from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import { AuthProvider, useAuthState } from './auth'

import { customTheme } from './Styles/theme'
import './Styles/Fonts.tsx'

import { AppRouter } from './Router'
import { SnipProvider } from 'useReactive'
import useReadLocalStorage from 'components/Hooks/useReadlocalStorage'
import { User } from 'snippy'


export const App = () => {
    const state = useAuthState()
    const user = useReadLocalStorage<User>('user')
    return (
        <AuthProvider initialState={(user as User) || state}>
            <SnipProvider>
                <ChakraProvider theme={customTheme}>
                    <AppRouter />
                </ChakraProvider>
            </SnipProvider>
        </AuthProvider>
    )
}
