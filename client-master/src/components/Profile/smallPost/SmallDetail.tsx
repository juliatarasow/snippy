import React from 'react'
import { VStack } from '@chakra-ui/react'
import SmallFeed from 'components/Feed/SmallFeed'

import { Post } from 'snippy'

function SmallDetail({post, index }: { post: Post; index: React.Key}) {
   
    return (
        <VStack
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            {post ? (
                <>
                  
                        <SmallFeed
                            key={index}
                            index={index}
                            post={post}
                        ></SmallFeed>
                    
                </>
            ) : null}
        </VStack>
      )
}

export default SmallDetail
