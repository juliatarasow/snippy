import { Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const TimelineComponent = ({ activity }: { activity: string }) => {
    return (
        <div>
            <Flex justifyContent="center" py="8px">
                <Heading color="primary" fontSize="18px">
                    Activities
                </Heading>
            </Flex>
            <UnorderedList color="darkgray" fontWeight="bold" spacing="4">
                <ListItem>User join to the community 3 days ago</ListItem>
                <ListItem>"LambdaGuy Comment your snippet" 📣</ListItem>
                <ListItem>"Just post your first snippet" 📣</ListItem>
            </UnorderedList>
        </div>
    )
}

export default TimelineComponent
