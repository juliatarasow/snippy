import { Badge, Box } from '@chakra-ui/react'
import React from 'react'

const OverviewComponent = ({ activity }: { activity: string }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        Some data
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    Some other data
                </Box>

                <Box>
                    {activity}
                    <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                    </Box>
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                    {/* {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={
                                    i < property.rating
                                        ? 'teal.500'
                                        : 'gray.300'
                                }
                            />
                        ))} */}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm"></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OverviewComponent
