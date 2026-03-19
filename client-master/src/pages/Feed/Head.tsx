import React from 'react'

import { VStack, Text, Heading } from '@chakra-ui/react'

interface IHead {
    title: string
    description: string
}

const Head = ({ title, description }: IHead) => {
    return (
        <div>
            <VStack alignItems="start" py="8px" px="16px" spacing="0.3">
                <Heading size="m">{title}</Heading>
                <Text as="i" variant="describe">
                    {description}
                </Text>
            </VStack>
        </div>
    )
}

export default Head
