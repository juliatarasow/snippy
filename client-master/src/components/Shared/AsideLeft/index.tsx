import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Icon, Link as TheLink, VStack } from '@chakra-ui/react'
import { FaBlog, FaCog, FaSignOutAlt, FaUserAlt } from 'react-icons/fa'

import { useHistory } from 'react-router'

import { useLogout } from 'auth'

function AsideLeft({ isLoggedIn }: { isLoggedIn: boolean | null }) {
    const history = useHistory()
    const logoutUser = useLogout()
    return (
        <Box p="2rem" maxW="275px" position="fixed">
            {isLoggedIn ? (
                <VStack alignItems="start" pl={5} spacing={5}>
                    <Link to="/dashboard">
                        <TheLink variant="aside" _hover={{ color: 'warning' }}>
                            <Icon as={FaUserAlt} boxSize="32px" pr="8px" />
                            Dashboard
                        </TheLink>
                    </Link>
                    <TheLink variant="aside" _hover={{ color: 'warning' }}>
                        <Icon as={FaBlog} boxSize="32px" pr="8px" />
                        Blog
                    </TheLink>
                    <Link to="/settings">
                        <TheLink variant="aside" _hover={{ color: 'warning' }}>
                            <Icon as={FaCog} boxSize="32px" pr="8px" />
                            Settings
                        </TheLink>
                    </Link>

                    <TheLink
                        onClick={(e) => {
                            logoutUser(e)
                            history.push('/')
                        }}
                        variant="aside"
                        _hover={{ color: 'warning' }}
                    >
                        <Icon as={FaSignOutAlt} boxSize="32px" pr="8px" />
                        Log Out
                    </TheLink>
                    <Link to="/create">
                        <Button variant="negative" size="l">
                            New Snippet
                        </Button>
                    </Link>
                </VStack>
            ) : (
                <span> Sign Up </span>
            )}
        </Box>
    )
}

export default AsideLeft
