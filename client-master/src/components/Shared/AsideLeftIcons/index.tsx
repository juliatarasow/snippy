import React from 'react'

import { Box, VStack } from '@chakra-ui/react'
import { FaBlog, FaCog, FaSignOutAlt, FaUserAlt, FaPlus } from 'react-icons/fa'

import IconAside from 'components/Shared/IconAside'

function AsideLeftIcons({ isLoggedIn }: { isLoggedIn: string }) {
    return (
        <Box p="2rem" maxW="104px" position="fixed">
            {isLoggedIn ? (
                <VStack alignItems="start" pl={5} spacing={5}>
                    <IconAside size="32px" label={'Profile'} icon={FaUserAlt} />
                    <IconAside size="32px" label={'Blog'} icon={FaBlog} />
                    <IconAside size="32px" label={'Settings'} icon={FaCog} />
                    <IconAside
                        size="32px"
                        label={'Logout'}
                        icon={FaSignOutAlt}
                    />
                    <IconAside size="32px" label={'New Post'} icon={FaPlus} />
                </VStack>
            ) : (
                <span> </span>
            )}
        </Box>
    )
}

export default AsideLeftIcons
