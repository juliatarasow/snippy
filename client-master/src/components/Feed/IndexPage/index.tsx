import { Flex, HStack, Image } from '@chakra-ui/react'
import React from 'react'

import AsideLeft from 'components/Shared/AsideLeft/index'
import AsideRight from 'components/Shared/AsideRight/index'
import AsideLeftIcons from 'components/Shared/AsideLeftIcons'

import { useAuthState } from 'auth'
import { useMediaQuery } from '@chakra-ui/react'

/* Navbar Mobile */
import Logo from 'Assets/Images/logo-snippy.png'
import { Link as RouterLink } from 'react-router-dom'
import IconAside from 'components/Shared/IconAside'
import {
    FaBlog,
    FaCog,
    FaHome,
    FaPlus,
    FaSignOutAlt,
    FaUserAlt,
} from 'react-icons/fa'
import SearchComponent from 'components/Shared/Navbar/search'

function IndexPage({
    children,
    isLoggedIn,
}: {
    children: any
    isLoggedIn: boolean | null
}) {
    const { token } = useAuthState()
    const [
        isLargerThan1272,
        isLargerThan1132,
        isLargerThan824,
        isLargerThan722,
    ] = useMediaQuery([
        '(min-width: 1272px)',
        '(min-width:1219px)',
        '(min-width: 1069px)',
        '(min-width: 722px)',
    ])

    function mediaQueries() {
        if (isLargerThan1272) {
            return (
                <Flex
                    flexDir="row"
                    flexWrap="nowrap"
                    my="0"
                    mx="auto"
                    maxW="1272px"
                    pt="16px"
                >
                    {/* Left Column */}
                    <Flex as="aside" h="full" minW="275px" w="full">
                        <AsideLeft isLoggedIn={isLoggedIn} />
                    </Flex>

                    {/* Main Feed */}
                    <Flex as="main" maxW="690px">
                        {children}
                    </Flex>

                    {/* Right Column */}
                    <Flex as="aside" h="full" minW="275px" w="full">
                        <AsideRight />
                    </Flex>
                </Flex>
            )
        } else if (isLargerThan1132) {
            return (
                <Flex
                    flexDir="row"
                    flexWrap="nowrap"
                    my="0"
                    mx="auto"
                    maxW="1219px"
                    pt="16px"
                >
                    {/* Left Column */}
                    <Flex
                        as="aside"
                        h="full"
                        minW="80px"
                        w="full"
                        justifyContent="start"
                    >
                        <AsideLeftIcons isLoggedIn={token!} />
                    </Flex>

                    {/* Main Feed */}

                    <Flex pr="16px" as="main" maxW="690px">
                        {children}
                    </Flex>
                    <AsideRight />
                </Flex>
            )
        } else if (isLargerThan824) {
            return (
                <Flex
                    flexDir="row"
                    flexWrap="nowrap"
                    my="0"
                    mx="auto"
                    maxW="1219px"
                    pt="16px"
                >
                    {/* Left Column */}
                    <Flex as="aside" h="full" minW="104px" w="full" mr="30px">
                        <AsideLeftIcons isLoggedIn={token!} />
                    </Flex>

                    {/* Main Feed */}
                    <Flex pr="16px" as="main" maxW="690px">
                        {children}
                    </Flex>
                </Flex>
            )
        } else if (isLargerThan722) {
            return (
                <Flex
                    flexDir="row"
                    flexWrap="nowrap"
                    my="0"
                    mx="auto"
                    maxW="1219px"
                    pt="16px"
                >
                    {/* Main Feed */}
                    <Flex pr="16px" as="main" maxW="690px">
                        {children}
                    </Flex>
                </Flex>
            )
        } else {
            return (
                <>
                    <HStack
                        as="nav"
                        spacing="20px"
                        px="16px"
                        py="4px"
                        w="100%"
                        position="sticky"
                        top="0"
                        bg="orange"
                        zIndex="1000"
                        justifyContent="space-between"
                    >
                        <RouterLink to={`/`}>
                            <Image maxW="150px" src={Logo} alt="Snippy" />
                        </RouterLink>
                        <HStack pl={5} spacing={5}>
                            <IconAside
                                size="24px"
                                label={'Blog'}
                                icon={FaBlog}
                            />
                            <IconAside
                                size="24px"
                                label={'Settings'}
                                icon={FaCog}
                            />
                            <IconAside
                                size="24px"
                                label={'Logout'}
                                icon={FaSignOutAlt}
                            />
                            <IconAside
                                size="24px"
                                label={'New Post'}
                                icon={FaPlus}
                            />
                        </HStack>
                    </HStack>
                    <HStack
                        as="nav"
                        spacing="20px"
                        px="16px"
                        py="4px"
                        w="100%"
                        position="fixed"
                        bottom="0"
                        bg="orange"
                        zIndex="1000"
                    >
                        <IconAside
                            size="24px"
                            label={'Profile'}
                            icon={FaHome}
                        />
                        <SearchComponent />
                        <IconAside
                            size="24px"
                            label={'Profile'}
                            icon={FaUserAlt}
                        />
                    </HStack>
                </>
            )
        }
    }

    return <Flex>{mediaQueries()}</Flex>
}

export default IndexPage
