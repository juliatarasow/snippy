import React from 'react'
import {
    Button,
    Divider,
    Text,
    Flex,
    Heading,
    HStack,
    VStack,
    Icon,
    Tag,
} from '@chakra-ui/react'
import { FaEdit, FaEye, FaPaperPlane, FaTrash } from 'react-icons/fa'
import moment from 'moment'
import { Snippet } from 'snippy'
import store from 'store'

const SingleEditableSnippet = ({ snippet }: { snippet: Snippet }) => {
    return (
        <>
            <Flex
                flexDir="column"
                w="100%"
                border="1px"
                rounded="10px"
                minW="500px"
            >
                <Flex w="100%" justifyContent="space-between" p="8px">
                    <Text>{moment(snippet?.dates?.created).fromNow()}</Text>

                    <Tag bg="blue" borderRadius="0" color="black" mr="8px">
                        {snippet.language}
                    </Tag>
                </Flex>
                <Divider />
                <VStack p="16px">
                    <VStack>
                        <Heading>{snippet.title}</Heading>
                        <Text as="i" variant="describe">
                            {snippet.description}
                        </Text>
                    </VStack>

                    <HStack spacing={8}>
                        <Button
                            variant="action"
                            color="primary"
                            //onClick={()=> store.updatePost()}
                        >
                            <Icon as={FaEdit}></Icon>
                        </Button>
                        <Button
                            variant="action"
                            color="primary"
                            onClick={() => store.addPost(snippet._id)}
                        >
                            <Icon as={FaPaperPlane}></Icon>
                        </Button>
                        <Button variant="action" color="primary">
                            <Icon as={FaEye}></Icon>
                        </Button>
                        <Button
                            variant="action"
                            color="primary"
                            onClick={() => store.removeSnippet(snippet._id)}
                        >
                            <Icon as={FaTrash}></Icon>
                        </Button>
                    </HStack>
                </VStack>
            </Flex>
        </>
    )
}

export default SingleEditableSnippet
