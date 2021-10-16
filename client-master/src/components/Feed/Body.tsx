import React from 'react'
import { VStack, Button, Icon, HStack, Text, Box } from '@chakra-ui/react'
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa'

import moment from 'moment'
import PrismRenderComponent from '../Create/PrismRenderComponent'
import AvatarComponent from 'components/Shared/Avatar'

import store from 'store'
import { Post, Snippet, User } from 'snippy'
import { useState } from 'react'

type Body = Partial<Snippet> &
    Partial<Post> &
    Partial<User> & { index: React.Key }

function PostBody({
    username,
    content,
    snippet,
    score,
    _id,
    profile,
    dates,
    index,
}: Body) {
    const [counter, setCounter] = useState(score)
    const incrementCounter = () => setCounter(counter! + 1)
    let decrementCounter = () => setCounter(counter! - 1)
    if (counter! <= 0) {
        decrementCounter = () => setCounter(1)
    }

    console.log(profile)

    return (
        <div>
            <HStack alignItems="start" p="16px" pb="0" w="100%">
                <VStack>
                    {/* Delete next block & bring Avatar component and past Profile -- Before passing Profile as prop */}
                    {/* Avatar */}
                    <Box boxSize="32px">
                        <AvatarComponent profile={profile!} />
                    </Box>

                    {/* Voting Box */}
                    <VStack>
                        <Button
                            onClick={() => {
                                store.upvotePost(
                                    _id as string,
                                    snippet?._id as string
                                )
                                incrementCounter()
                            }}
                            variant="arrowUp"
                        >
                            <Icon as={FaLongArrowAltUp} boxSize="24px" />
                        </Button>
                        <Text variant="counter">{counter}</Text>
                        <Button
                            onClick={() => {
                                store.downvotePost(
                                    _id as string,
                                    snippet?._id as string
                                )
                                decrementCounter()
                            }}
                            variant="arrowDown"
                        >
                            <Icon as={FaLongArrowAltDown} boxSize="24px" />
                        </Button>
                    </VStack>
                </VStack>
                {/* Body */}
                <VStack alignItems="flex-start">
                    {/* User and Date */}
                    <HStack justifyContent="space-between" w="100%">
                        <Text variant="username">{username}</Text>
                        <Text variant="username">
                            {moment(dates?.created).fromNow()}
                        </Text>
                    </HStack>
                    {/* Snippet */}
                    <PrismRenderComponent code={content} />
                </VStack>
            </HStack>
        </div>
    )
}

export default PostBody
