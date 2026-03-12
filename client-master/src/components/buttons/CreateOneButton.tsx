import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

interface AButton {
    step: any
    title: string
    justify: string
    variant: string
}

function CreateOneButton({ step, title, justify, variant }: AButton) {
    return (
        <div>
            <HStack
                mt="24px"
                w="100%"
                justifyContent={justify}
                position="relative"
                bottom="0"
            >
                <Button onClick={step} variant={variant}>
                    {title}
                </Button>
            </HStack>
        </div>
    )
}

export default CreateOneButton
