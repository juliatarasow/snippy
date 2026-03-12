import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FaAngular, FaReact, FaVuejs } from 'react-icons/fa'

function CreateSelectField({
    placeholder,
    value,
    cb,
}: {
    placeholder: string
    value: any
    cb: UseFormRegister<any>
}) {
    return (
        <HStack m="1rem" spacing={4}>
            <Button
                leftIcon={<FaReact />}
                value="react"
                {...cb(value)}
                variant="topic"
                bg="yellow"
                borderColor="yellow"
            >
                JavaScript
            </Button>
            <Button
                leftIcon={<FaReact />}
                value="react"
                {...cb(value)}
                variant="topic"
                bg="blue"
                borderColor="blue"
            >
                React
            </Button>
            <Button
                leftIcon={<FaAngular />}
                value="react"
                {...cb(value)}
                variant="topic"
                bg="pink"
                borderColor="pink"
            >
                Angular
            </Button>
            <Button
                leftIcon={<FaVuejs />}
                value="react"
                {...cb(value)}
                variant="topic"
                bg="green"
                borderColor="green"
            >
                Vue
            </Button>
            <Button
                leftIcon={<FaVuejs />}
                value="react"
                {...cb(value)}
                variant="topic"
                bg="orange"
                borderColor="orange"
            >
                Node
            </Button>
        </HStack>
    )
}

export default CreateSelectField
