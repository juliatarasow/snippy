import React, { Suspense, lazy } from 'react'
import {
    Flex,
    Divider,
    HStack,
    Box,
    SkeletonText,
    SkeletonCircle,
} from '@chakra-ui/react'
/* Types */
import { Post } from 'snippy'

/* Extra Components */

import PostBody from './Body'
const ButtonsComponents = lazy(() => import('./Buttons'))
const Head = lazy(() => import('./Head'))

function FeedComponent({ post, index }: { post: Post; index: React.Key }) {
    return (
        <Flex
            w="690px"
            border="1px"
            rounded="10px"
            flexDir="column"
            key={index}
        >
            {/* Heading */}
            <Suspense
                fallback={
                    <Box padding="6" boxShadow="lg" bg="white">
                        <SkeletonCircle size="10" />
                        <SkeletonText mt="4" noOfLines={4} spacing="4" />
                    </Box>
                }
            >
                <HStack>
                    <Head
                        title={post.snippet.title}
                        description={post.snippet.description!}
                    />
                </HStack>
                <Divider />

                <PostBody
                    index={index}
                    dates={post.dates}
                    snippet={post.snippet}
                    author={post.snippet.author!}
                    content={post.snippet.content}
                    style={post.snippet.style!}
                    score={post.score}
                    _id={post._id}
                    profile={post.user.profile}
                    username={post.user.username}
                />

                {/* Actions */}
                <ButtonsComponents
                    index={index}
                    post={post}
                ></ButtonsComponents>
            </Suspense>
        </Flex>
    )
}

export default FeedComponent
