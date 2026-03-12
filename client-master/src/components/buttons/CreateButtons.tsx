import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

interface AButton {
    next: any
    back: any
}

function CreateButtons({ next, back }: AButton) {
    return (
        <div>
            <HStack
                mt="24px"
                w="100%"
                justifyContent="space-between"
                position="relative"
                bottom="0"
            >
                <Button onClick={back} variant="back">
                    Back
                </Button>
                <Button onClick={next}>Next</Button>
            </HStack>
        </div>
    )
}

export default CreateButtons
