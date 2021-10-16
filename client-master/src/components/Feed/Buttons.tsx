import React, { useState } from 'react'
import { HStack, Button, Icon, Text } from '@chakra-ui/react'
import { FaRegCommentAlt, FaRegSave, FaShareAlt } from 'react-icons/fa'

import CommentComponent from './PostComponent/Comment'

import store from 'store'

import { Post } from 'snippy'

function ButtonsComponent({ post, index }: { post: Post; index: React.Key }) {
    const [isOpen, setIsOpen] = useState(false)

    const [counter, setCounter] = useState(post.isSaved)
    const incrementCounter = () => setCounter(counter! + 1)

    return (
        <div>
            <HStack justifyContent="center" spacing="10" pb="8px">
                <HStack alignItems="center" spacing="0">
                    <Text variant="action">{post.comments.length}</Text>
                    <Button variant="action" onClick={() => setIsOpen(!isOpen)}>
                        <Icon as={FaRegCommentAlt}></Icon>
                    </Button>
                </HStack>
                <HStack alignItems="center" spacing="0">
                    <Text variant="action">{counter}</Text>
                    <Button
                        onClick={() => {
                            store.savePost(post._id)
                            incrementCounter()
                        }}
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
            {isOpen && <CommentComponent index={index} post={post} />}
        </div>
    )
}

export default ButtonsComponent
