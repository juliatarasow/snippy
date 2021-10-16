import React, { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/react'
import Feed from '..'

import IndexPage from 'components/Feed/IndexPage'
import store, { Store, subscribe } from 'store'
import { derive } from 'valtio/utils'
import { load } from 'store'
function Post() {
    const [state, setstate] = useState<Store['posts']>([])
    useEffect(() => {
        load('posts')
        subscribe((store) => setstate(store.posts))
        return () => {
            setstate([])
        }
    }, [])
    derive({
        doubled: (get) =>
            get(store).posts.forEach(
                (post) => {
                    post.score = post.snippet.upvote - post.snippet.downvote
                },
                {
                    proxy: state,
                }
            ),
    })
    return (
        <IndexPage isLoggedIn={true}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                {state ? (
                    <VStack>
                        {state.map((post, index) => (
                            <Feed key={index} index={index} post={post}></Feed>
                        ))}
                    </VStack>
                ) : null}
            </div>
        </IndexPage>
    )
}

export default Post
