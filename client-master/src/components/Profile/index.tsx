import { Box, HStack, VStack, Text, Flex, Center } from '@chakra-ui/react'
import React from 'react'
import { Post, User } from 'snippy'

import SmallPostComponent from './smallPost'
import SingleEditableSnippet from 'components/Dasboard/SingleEditableSnippet'
import SavedPostComponent from './savedPost'
import IconAside from 'components/Shared/IconAside'
import { FaPlus } from 'react-icons/fa'

const ProfileComponent = ({
    posts,
    snippets,
    saved,
    filter,
}: {
    user: User
    snippets: User['snippets']
    saved: User['savedSnippets']
    posts: Post[]
    filter: string
}) => {
    const CreatedOneArr = snippets?.map((item, index) => (
        <SingleEditableSnippet key={index} snippet={item} />
    ))
    if (filter === 'overview') {
        return (
            <HStack w="100%" alignItems="start">
                <SmallPostComponent posts={posts} />
            </HStack>
        )
    }
    if (filter === 'created') {
        return (
            <HStack w="100%" alignItems="start">
                <VStack>
                    {snippets != null && snippets.length > 0 ? (
                        <>{CreatedOneArr}</>
                    ) : (
                        <>
                            <Text>Thanks for contributing to our community!</Text>

                            <Flex justifyContent="center" alignItems="center" minW="500px" borderColor="#282729">
                                    <Text fontFamily="Roboto Mono" fontSize="24px" fontWeight="bold">
                                        Create your first Snippet{' '}
                                    </Text>
                                    <IconAside
                                        size="32px"
                                        label={'New Post'}
                                        icon={FaPlus}
                                    />
                            </Flex>
                        </>
                    )}
                </VStack>
            </HStack>
        )
    }
    if (filter === 'saved') {
        return (
            <VStack w="100%" alignItems="start">
                <SavedPostComponent saved={saved} />
                {/* <code>{JSON.stringify(saved, null, 6)}</code> */}
            </VStack>
        )
    }
    if (filter === 'upvoted') {
        return (
            <HStack w="100%" alignItems="start">
                <code>Upvoted</code>
            </HStack>
        )
    }
    if (filter === 'downvoted') {
        return (
            <HStack w="100%" alignItems="start">
                <code>Downvoted</code>
            </HStack>
        )
    }
    if (filter === 'commented') {
        return (
            <HStack w="100%" alignItems="start">
                <code>Created</code>
            </HStack>
        )
    } else {
        return null
    }
}

export default ProfileComponent
