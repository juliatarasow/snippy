import React, { Suspense, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/layout'
import { SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton'

import { getUserData } from 'service/store_services'

import ProfileComponent from 'components/Profile'
import Filter from 'components/Profile/Filter'

import { useAuthState } from 'auth'
import { Flex, HStack, VStack } from '@chakra-ui/react'

import AsideLeftDash from 'components/Shared/AsideLeftDash'

import store, { load, subscribe } from 'store'
import { Post, User } from 'snippy'
import ProfileCard from 'components/Profile/ProfileCard'

const DashboardMainComponent = () => {
    const { _id } = useAuthState()
    const [userData, setUserData] = useState<User>()
    const [postsData, setPostsData] = useState<Post[]>()
    const [createdData, setCreatedData] = useState<User['snippets']>()
    const [savedData, setSavedData] = useState<User['savedSnippets']>()
    const [filter, setFilter] = useState('overview')

    useEffect(() => {
        if (_id !== null) {
            getUserData(_id).then((user) => store.setActiveUser(user))
        }
        load('posts')
        subscribe((store) => setUserData(store.activeUser))
        subscribe((store) => setPostsData(store.posts))
        subscribe((store) => setCreatedData(store.activeUser.snippets))

        subscribe((store) => setSavedData(store.activeUser.savedSnippets))
    }, [_id])
    console.log(userData)
    return (
        <VStack maxW="997px" mx="auto" mt="16px" justifyItems="center">
            <Suspense
                fallback={
                    <Box padding="6" boxShadow="lg" bg="white">
                        <SkeletonCircle size="10" />
                        <SkeletonText mt="4" noOfLines={4} spacing="4" />
                    </Box>
                }
            >
                <HStack position="sticky" zIndex="999" top="73px" bg="white">
                    <Filter cb={setFilter} />
                </HStack>

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
                        <AsideLeftDash isLoggedIn={true} />
                    </Flex>

                    {/* Main Feed */}
                    <Flex as="main" w="500px">
                        <ProfileComponent
                            filter={filter}
                            snippets={createdData!}
                            saved={savedData!}
                            posts={postsData!}
                            user={userData!}
                        />
                    </Flex>
                    <Flex as="aside" h="full" minW="275px" w="full">
                        <ProfileCard user={userData!} />
                    </Flex>
                </Flex>
            </Suspense>
        </VStack>
    )
}

export default DashboardMainComponent
