import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

function UserInfo({
    author,
    content,
    score,
}: {
    author: string
    content: string
    score: number
}) {
    return (
        <div>
            <HStack justifyContent="space-between" w="100%" mb="16px">
                <Text variant="username">{author}</Text>
                <Text variant="username">2 days ago</Text>
            </HStack>
        </div>
    )
}

export default UserInfo
