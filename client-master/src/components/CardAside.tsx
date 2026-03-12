import { Divider, Heading, Link, VStack, Text, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { Post } from 'snippy'

interface ACardAside {
    heading: string
    observable: any
}

function CardAside({ heading, observable }: ACardAside) {
    const [snips, setSnips] = useState<Post[]>()
    useEffect(() => {
        const sub = observable.subscribe(setSnips)
        return () => {
            sub.unsubscribe()
        }
    }, [observable])
    return (
        <div>
            <VStack
                borderColor="black"
                borderWidth="1px"
                borderRadius="10px"
                minH="fit-content"
                w="275px"
                alignItems="start"
                py="8px"
                mx="16px"
            >
                <Link>
                    <Heading size="m" px="16px">
                        {heading}
                    </Heading>
                </Link>
                <Divider borderColor="lightgray" />
                <Flex flexDir="column" px="16px">
                    {snips?.map((post, key) => (
                        <div key={key} style={{ padding: '8px' }}>
                            <Link>
                                <Heading size="s">{post.snippet.title}</Heading>
                                <Text variant="describe" fontSize="12px">
                                    {post.snippet.description}
                                </Text>
                            </Link>
                        </div>
                    ))}
                </Flex>
            </VStack>
        </div>
    )
}

export default CardAside
