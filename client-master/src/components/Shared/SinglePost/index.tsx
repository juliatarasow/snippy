import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Icon,
    ModalHeader,
} from '@chakra-ui/react'
import { FaEye } from 'react-icons/fa'

import FeedComponent from 'components/Feed'

import { Post } from 'snippy'

function SinglePostComponent({
    post,
    index,
}: {
    post: Post
    index: React.Key
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
        <>
            <Button variant="action" color="primary" onClick={onOpen}>
                <Icon as={FaEye} boxSize="32px" pr="8px" />
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW="740px" borderRadius="0">
                    <ModalHeader>{''}</ModalHeader>
                    <ModalCloseButton
                        borderRadius="0"
                        _hover={{ bg: 'yellow' }}
                    />
                    <ModalBody>
                        <FeedComponent post={post} index={index} />
                    </ModalBody>

                    <ModalFooter justifyContent="center">
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SinglePostComponent
