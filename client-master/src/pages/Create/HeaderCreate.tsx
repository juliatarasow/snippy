import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

function HeaderCreate({ title }: { title: string }) {
    return (
        <Box
            textAlign="center"
            p={10}
            borderWidth="3px"
            borderColor="secondary"
            color="secondary"
            w="100%"
        >
            <Heading
                fontFamily="Roboto Mono"
                fontWeight="700"
                fontSize="30px"
            >
                {title}
            </Heading>
        </Box>
    )
}

export default HeaderCreate
