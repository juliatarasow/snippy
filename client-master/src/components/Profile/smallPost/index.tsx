import React from 'react'
import { VStack } from '@chakra-ui/react'
//import SmallFeed from 'components/Shared/smallFeed'
import SmallFeed from 'components/Feed/SmallFeed'

import { Post } from 'snippy'

function SmallPostComponent({ posts }: { posts: Post[] }) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
            }}
        >
            {posts ? (
                <VStack>
                    {posts.map((post, index) => (
                        <SmallFeed
                            key={index}
                            index={index}
                            post={post}
                        ></SmallFeed>
                    ))}
                </VStack>
            ) : null}
        </div>
    )
}

export default SmallPostComponent
