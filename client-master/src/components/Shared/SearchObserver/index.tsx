import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

import ObserverComponent from './ObserverComponent'

export default function SearchObserverComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <InputGroup maxW="25vw">
                <Input
                    onClick={onOpen}
                    ref={finalRef}
                    placeholder="What are you looking for?"
                />
                <InputRightElement children={<FaSearch color="black" />} />
            </InputGroup>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent fontFamily="Roboto">
                    <ModalHeader fontFamily="Roboto Mono">
                        Search for snips
                    </ModalHeader>
                    <ModalCloseButton />
                    <ObserverComponent
                        reference={initialRef}
                    ></ObserverComponent>
                </ModalContent>
            </Modal>
        </>
    )
}
