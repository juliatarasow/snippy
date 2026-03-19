import React from 'react'

import { Heading, VStack, Box, HStack, Separator, Text, Flex } from '@chakra-ui/react'

import TimelineComponent from './Timeline'
import AvatarComponent from 'components/Avatar'

import { useAuthState } from 'auth'
import { User } from 'snippy'

function ProfileCard({ user }: { user: User }) {
    const { profile } = useAuthState()

    return (
        <>
            <VStack borderColor="black" borderWidth="1px" borderRadius="10px" minH="fit-content" w="275px" alignItems="start" pt="8px" pb="16px" mx="16px">
                <Flex alignItems="center" ml="16px">
                    <Box w="54px" mr="8px">
                        {profile && <AvatarComponent profile={profile} />}
                    </Box>
                    <Heading>{user?.username}</Heading>
                </Flex>

                <Separator borderColor="lightgray" />
                <Flex flexDir="column" alignItems="center" px="24px" w="100%">
                    <Flex flexDir="column" alignItems="start" w="100%">
                        <HStack>
                            <Text variant="profile">created:</Text>
                            <Text variant="counter">
                                {user?.snippets?.length ?? 0}
                            </Text>
                        </HStack>
                        <HStack>
                            <Text variant="profile">saved:</Text>
                            <Text variant="counter">
                                {user?.savedSnippets?.length ?? 0}
                            </Text>
                        </HStack>
                    </Flex>
                </Flex>
                <Separator borderColor="lightgray" />
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
        </>
    )
}

export default ProfileCard
