import React from 'react'
import { DialogRoot, DialogContent, DialogFooter, DialogBody, DialogCloseTrigger, DialogHeader, DialogTitle, DialogTrigger, Button, Icon } from '@chakra-ui/react'
import { FaEye } from 'react-icons/fa'

import FeedComponent from 'pages/Feed/Feed'

import { Post } from 'snippy'

function SinglePostComponent({
    post,
    index,
}: {
    post: Post
    index: React.Key
}) {
    return (
        <DialogRoot>
            <DialogTrigger asChild>
                <Button variant="action" color="primary">
                    <Icon as={FaEye} boxSize="32px" pr="8px" />
                </Button>
            </DialogTrigger>
            <DialogContent maxW="740px" borderRadius="0">
                <DialogHeader>
                    <DialogTitle>{''}</DialogTitle>
                </DialogHeader>
                <DialogCloseTrigger borderRadius="0" _hover={{ bg: 'yellow' }} />
                <DialogBody>
                    <FeedComponent post={post} index={index} />
                </DialogBody>
                <DialogFooter justifyContent="center">
                    <DialogCloseTrigger asChild>
                        <Button colorPalette="blue" mr={3}>
                            Close
                        </Button>
                    </DialogCloseTrigger>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}

export default SinglePostComponent
