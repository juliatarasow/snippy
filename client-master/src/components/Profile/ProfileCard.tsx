import React from 'react'
import {
    Divider,
    Heading,
    VStack,
    Box,
    HStack,
    Text,
    Flex,
} from '@chakra-ui/react'

import { User } from 'snippy'
import AvatarComponent from 'components/Shared/Avatar'

import { useAuthState } from 'auth'
import TimelineComponent from './Timeline'

function ProfileCard({ user }: { user: User }) {
    const { profile } = useAuthState()

    return (
        <div>
            <VStack
                borderColor="black"
                borderWidth="1px"
                borderRadius="10px"
                minH="fit-content"
                w="275px"
                alignItems="start"
                pt="8px"
                pb="16px"
                mx="16px"
            >
                <Flex alignItems="center" ml="16px">
                    <Box w="54px" mr="8px">
                        {profile && <AvatarComponent profile={profile} />}
                    </Box>
                    <Heading>{user?.username}</Heading>
                </Flex>

                <Divider borderColor="lightgray" />
                <Flex flexDir="column" alignItems="center" px="24px" w="100%">
                    <Flex flexDir="column" alignItems="start" w="100%">
                        <HStack>
                            <Text variant="profile">created:</Text>
                            <Text variant="counter">
                                {user?.snippets.length}
                            </Text>
                        </HStack>
                        <HStack>
                            <Text variant="profile">saved:</Text>
                            <Text variant="counter">
                                {user?.savedSnippets.length}
                            </Text>
                        </HStack>
                    </Flex>
                </Flex>
                <Divider borderColor="lightgray" />
                <Flex flexDir="column" alignItems="center" px="24px" w="100%">
                    <Flex flexDir="column" alignItems="start" w="100%">
                        <HStack>
                            {user?.activities.map((activitity, index) => (
                                <TimelineComponent
                                    key={index}
                                    activity={activitity}
                                />
                            ))}
                        </HStack>
                    </Flex>
                </Flex>
            </VStack>
        </div>
    )
}

export default ProfileCard
