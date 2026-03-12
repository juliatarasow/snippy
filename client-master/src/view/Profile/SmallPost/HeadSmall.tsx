import { VStack, Heading } from '@chakra-ui/layout'
import React from 'react'

interface IHead {
    title: string | undefined
}

const SmallHeadComopnent = ({ title }: IHead) => {
  
    return (
        <div>
            <VStack alignItems="start" pt="4px">
                <Heading size="xs">{title}</Heading>
            </VStack>
        </div>
    )
}

export default SmallHeadComopnent
