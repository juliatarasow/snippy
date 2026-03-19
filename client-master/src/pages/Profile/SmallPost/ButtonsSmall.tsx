import React, { useState } from 'react'
import { HStack, Button, Icon, Text } from '@chakra-ui/react'
import { FaRegCommentAlt, FaRegSave, FaShareAlt } from 'react-icons/fa'

import store from '../../../store'

import { Post } from '../../../snippy'

function SmallButtonsComponents({ post }: { post: Post }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <HStack justifyContent="center" spacing="10" py="8px">
                <HStack alignItems="center" spacing="0">
                    <Text variant="action">{post.comments.length}</Text>
                    <Button variant="action" onClick={() => setIsOpen(!isOpen)}>
                        <Icon as={FaRegCommentAlt}></Icon>
                    </Button>
                </HStack>
                <HStack alignItems="center" spacing="0">
                    <Text variant="action">{post.isSaved}</Text>
                    <Button
                        onClick={() => store.saveSnippet(post._id)}
                        variant="action"
                    >
                        <Icon as={FaRegSave}></Icon>
                    </Button>
                </HStack>
                <HStack alignItems="center" spacing="0">
                    <Text variant="action">22</Text>
                    <Button variant="action">
                        <Icon as={FaShareAlt}></Icon>
                    </Button>
                </HStack>
            </HStack>
        </div>
    )
}

export default SmallButtonsComponents
