import { Flex, Heading, List } from '@chakra-ui/react'
import React from 'react'

const TimelineComponent = ({ activity }: { activity: string }) => {
    return (
        <div>
            <Flex justifyContent="center" py="8px">
                <Heading color="primary" fontSize="18px">
                    Activities
                </Heading>
            </Flex>
            <List.Root color="darkgray" fontWeight="bold" spacing="4">
                <List.Item>User join to the community 3 days ago</List.Item>
                <List.Item>"LambdaGuy Comment your snippet" 📣</List.Item>
                <List.Item>"Just post your first snippet" 📣</List.Item>
            </List.Root>
        </div>
    )
}

export default TimelineComponent
