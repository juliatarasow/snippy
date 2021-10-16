import React, { Suspense } from 'react'
import { Flex, Box, SkeletonText, SkeletonCircle } from '@chakra-ui/react'

/* Types */
import { Post } from 'snippy'

/* Extra Components */
import SmallPostBody from 'components/Profile/smallPost/BodySmall'

function SmallFeed({ post, index }: { post: Post; index: React.Key }) {
    return (
        <Flex border="1px" rounded="10px" key={index}>
            <Suspense
                fallback={
                    <Box padding="6" boxShadow="lg" bg="white">
                        <SkeletonCircle size="10" />
                        <SkeletonText mt="4" noOfLines={4} spacing="4" />
                    </Box>
                }
            >
                <SmallPostBody post={post} index={index} />
            </Suspense>
        </Flex>
    )
}

export default SmallFeed
