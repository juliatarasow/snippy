import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBlog, FaCog, FaHome, FaSignOutAlt } from 'react-icons/fa'

import { Box, Button, Icon, Link as TheLink, VStack } from '@chakra-ui/react'

import { useLogout } from '../../../auth'

function AsideLeftDash({ isLoggedIn }: { isLoggedIn: boolean | null }) {
    const navigate = useNavigate()
    const logoutUser = useLogout()
    return (
        <Box px="2rem" maxW="275px" position="fixed">
            {isLoggedIn ? (
                <VStack alignItems="start" pl={5} spacing={5}>
                    <Link to="/feed">
                        <TheLink variant="aside" _hover={{ color: 'warning' }}>
                            <Icon as={FaHome} boxSize="32px" pr="8px" />
                            Feed
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
                            navigate('/')
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

export default AsideLeftDash
