import React, { useEffect, useState } from 'react'
import { VStack, HStack, Text, Box, Flex } from '@chakra-ui/react'
import AvatarComponent from 'components/Shared/Avatar'
import moment from 'moment'


function CommentS({ comments }: { comments: any }) {
    const [commentsArr, setComments] = useState<any>([])
    useEffect(() => {
        setComments(comments)
        return () => {
            setComments([])
        }
    }, [comments])
    return (
        <>
            {commentsArr.map(
                (
                    property: {
                        profile: string
                        username: string
                        createdAt: number
                        comment: string
                    },
                    index: React.Key | null | undefined
                ) => (
                    <Flex m="16px" minW="300px" key={index}>
                        <Box boxSize="24px" mr="8px">
                            <AvatarComponent profile={property.profile} />
                        </Box>

                        <VStack w="100%" alignItems="start">
                            <HStack justifyContent="space-between" w="100%">
                                <Text variant="username">
                                    {JSON.stringify(property.username, null, 4)}
                                </Text>
                                <Text variant="username">
                                    {JSON.stringify(
                                        moment(property.createdAt).format(
                                            'DD:MM:YYYY HH:mm'
                                        ),
                                        null,
                                        4
                                    )}
                                </Text>
                            </HStack>

                            <Text variant="comment">
                                {JSON.stringify(property.comment, null, 4)}
                            </Text>
                        </VStack>
                    </Flex>
                )
            )}
        </>
    )
}

export default CommentS
