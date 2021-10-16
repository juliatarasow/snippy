import React, { lazy } from 'react'
import moment from 'moment'
import { VStack, Button, Icon, HStack, Text, Flex } from '@chakra-ui/react'
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa'

import { Post } from 'snippy'

import SmallHeadComponent from './HeadSmall'
import SinglePostComponent from 'components/Shared/SinglePost'
const SmallButtonsComponents = lazy(() => import('./ButtonsSmall'))

function SmallPostBody({ post, index }: { post: Post; index: React.Key }) {
    return (
        <div>
            <Flex
                alignItems="center"
                justifyContent="space-between"
                minW="500px"
                p="8px"
            >
                <HStack w="100%">
                    {/* Voting Box */}
                    <VStack px="8px">
                        <Button
                            onClick={() => console.log(post._id!)}
                            variant="arrowUp"
                        >
                            <Icon as={FaLongArrowAltUp} boxSize="16px" />
                        </Button>
                        <Text variant="counter">{post.score}</Text>
                        <Button variant="arrowDown">
                            <Icon as={FaLongArrowAltDown} boxSize="16px" />
                        </Button>
                    </VStack>

                    <VStack alignItems="flex-start" px="8px">
                        {/* Title */}
                        <SmallHeadComponent title={post.snippet?.title} />
                        {/* User and Date */}
                        <HStack
                            justifyContent="space-between"
                            w="100%"
                            mb="16px"
                        >
                            <Text variant="username">
                                {post.user?.username}
                            </Text>
                            <Text variant="username">
                                {moment(post.dates!.created).fromNow()}
                            </Text>
                        </HStack>
                        {/* Actions */}
                        <SmallButtonsComponents post={post} />
                    </VStack>
                </HStack>

                <SinglePostComponent post={post} index={index} />
            </Flex>
        </div>
    )
}

export default SmallPostBody
