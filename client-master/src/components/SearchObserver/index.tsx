import React from 'react'
import { FaSearch } from 'react-icons/fa'

import { Dialog, DialogBackdrop, Field, Input, InputElement, useDisclosure } from '@chakra-ui/react'

import ObserverComponent from './ObserverComponent'

export default function SearchObserverComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <Field.Root maxW="25vw">
                <Input
                    onClick={onOpen}
                    ref={finalRef}
                    placeholder="What are you looking for?"
                />
                <InputElement children={<FaSearch color="black" />} />
            </Field.Root>
            <Dialog.Root
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <DialogBackdrop />
                <Dialog.Content fontFamily="Roboto">
                    <Dialog.Header fontFamily="Roboto Mono">
                        Search for snips
                    </Dialog.Header>
                    <Dialog.CloseTrigger />
                    <ObserverComponent
                        reference={initialRef}
                    ></ObserverComponent>
                </Dialog.Content>
            </Dialog.Root>
        </>
    )
}
