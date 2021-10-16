import React from 'react'
import { Box, Flex, Icon } from '@chakra-ui/react'
import { FaRegCopyright } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <Flex
                h="92px"
                w="100%"
                p="24px"
                flexDirection="column"
                color="darkgray"
                fontSize="12px"
            >
                <Box>
                    Snippy Inc <Icon as={FaRegCopyright} /> 2021
                </Box>
                This App is made by Igor Boruch, Blas Oronoz and Julia Tarasow
            </Flex>
        </>
    )
}

export default Footer
