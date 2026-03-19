import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Textarea, Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import CommentS from './Comments'

import { useAuthState } from 'auth'
import store from 'store'

import { Post } from 'snippy'

function CommentComponent({ post, index }: { post: Post; index: React.Key }) {
    const { username, _id, profile } = useAuthState()

    const { register, handleSubmit } = useForm()
    const onSubmit = (data: any) => {
        store.newComment.comment = data.comment
        store.newComment.author = { _id, username, profile }
        store.newComment.createdAt = Date.now()
        store.addComment(post._id)
    }

    return (
        <>
            <Box px="46px">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Textarea
                        {...register('comment')}
                        borderColor="black"
                        borderRadius="0"
                    />
                    {profile ? (
                        <Button type="submit" variant="white" w="100%">
                            Comment
                        </Button>
                    ) : (
                        <RouterLink to="/login">
                            <Button type="button" variant="primary" w="100%">
                                Log In to comment
                            </Button>
                        </RouterLink>
                    )}

                    <CommentS comments={store.posts[index].comments} />
                </form>
            </Box>
        </>
    )
}

export default CommentComponent
