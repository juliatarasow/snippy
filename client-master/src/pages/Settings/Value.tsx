import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPen } from 'react-icons/fa'

interface Value {
    tag: string
    input: string
   
}
function ValueComponent({ tag, input }: Value) {
    let dis = 'none'
    return (
        <Flex flexDir="column" mb="16px">
            <Text variant="valueTag" lineHeight="2px">
                {tag}
            </Text>
            <Flex>
                <Flex>
                    <Flex h="40px" minW="200px" alignItems="center">
                        <Text variant="value">{input}</Text>
                    </Flex>
                    <Button
                        leftIcon={<FaPen />}
                        value="react"
                        variant="action"
                        onClick={() => {
                            dis = 'visible'
                        }}
                    />
                </Flex>
                {/* when clicking on pen will become visible */}
                <Flex h="fit-content" alignItems="center" display={dis}>
                    <Input placeholder="John" variant="value" mr="8px" ></Input>
                    <Button variant="primary" size="s">
                        Save
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ValueComponent
