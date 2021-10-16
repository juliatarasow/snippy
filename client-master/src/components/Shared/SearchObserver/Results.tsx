import { Box, Flex, Text, Spacer } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaJsSquare } from 'react-icons/fa'
import { Snippet } from 'snippy'
import { Icon, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'

const ResultComponent = ({ snippet }: { snippet: Snippet }) => {
    return (
        <>
            <Flex>
                <Box p="2">
                    <Text fontSize="16px" fontWeight="bold">
                        {snippet.title}
                    </Text>
                </Box>
                <Spacer />
                <Box>
                    <Tag variant="subtle" colorScheme="cyan">
                        <TagLeftIcon boxSize="12px" as={FaJsSquare} />
                        <TagLabel>{snippet.language}</TagLabel>
                    </Tag>
                </Box>
            </Flex>
            <Box h="100%" fontSize="12">
                <Link to="">
                    {`${snippet.description} `}
                    <Icon as={FaExternalLinkAlt}></Icon>
                </Link>
            </Box>
        </>
    )
}

export default ResultComponent
