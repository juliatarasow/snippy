import { Box, Flex, Heading } from '@chakra-ui/react'
import { useAuthState } from 'auth'
import useReadLocalStorage from 'components/Hooks/useReadlocalStorage'
import React from 'react'

import ValueComponent from './Value'

function SettingsComponent() {
    const state = useAuthState()
    const user = useReadLocalStorage('user')
    /* use-hook-form */
    console.log(user)
    return (
        <div>
            <Box
                textAlign="center"
                p={10}
                borderWidth="3px"
                borderColor="primary"
                color="primary"
                w="100%"
            >
                <Heading
                    fontFamily="Roboto Mono"
                    fontWeight="700"
                    fontSize="30px"
                >
                    Settings
                </Heading>
            </Box>
            <Flex
                flexDir="column"
                mt="32px"
                mx="auto"
                border="1px"
                rounded="10px"
                w="fit-content"
                pt="32px"
                px="16px"
            >
                <ValueComponent tag="username" input={state.username} />

                <ValueComponent tag="email" input="Julia@gmail.com" />
                <ValueComponent tag="password" input="*********" />
            </Flex>
        </div>
    )
}

export default SettingsComponent
