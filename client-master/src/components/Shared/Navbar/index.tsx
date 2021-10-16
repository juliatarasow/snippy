import React from 'react'
import { HStack, Image, Box, Flex } from '@chakra-ui/react'

import Logo from 'Assets/Images/logo-snippy.png'
import { Link as RouterLink } from 'react-router-dom'
import { useAuthState } from 'auth'
import DropdownComponent from './dropdown'
import SearchObserverComponent from '../SearchObserver'
import AvatarComponent from '../Avatar'

const NavbarComponent = () => {
    const { profile } = useAuthState()
    return (
        <Flex
            as="nav"
            px="20px"
            py="10px"
            boxShadow="md"
            position="sticky"
            top="0"
            bg="white"
            zIndex="1000"
            justifyContent="space-between"
            w="100%"
            alignItems="center"
        >
            <RouterLink to={`/feed`}>
                <Image minW="240px" src={Logo} alt="Snippy" />
            </RouterLink>
            <HStack spacing={8}>
                <DropdownComponent />
                <SearchObserverComponent />
            </HStack>

            <RouterLink to="/dashboard">
                <Box w="54px" alignSelf="end">
                    {profile && <AvatarComponent profile={profile} />}
                </Box>
            </RouterLink>
        </Flex>
    )
}

export default NavbarComponent
