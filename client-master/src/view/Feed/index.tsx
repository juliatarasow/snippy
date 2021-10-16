import React, { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/react'
import { derive } from 'valtio/utils'

/* Custom Library */
import store, { load, Store, subscribe } from 'store'

/* Components */
import Feed from 'components/Feed'
import IndexPage from 'components/Feed/IndexPage'

/* Types */

function FeedMainComponent() {
    const [posts, setPosts] = useState<Store['posts']>([])
    
    useEffect(() => {
        load('posts')
        
        subscribe((store) => setPosts(store.posts))
        return () => {
            setPosts([])
        }
    }, [])

    /* Valtio Derive Utily */
    derive({
        scores: (get) =>
            get(store).posts.forEach(
                (post) => {
                    post.score = post.snippet.upvote - post.snippet.downvote
                },
                {
                    proxy: posts,
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
                {posts ? (
                    <VStack>
                        {posts.map((post, index) => (
                            <Feed key={index} index={index} post={post}></Feed>
                        ))}
                    </VStack>
                ) : null}
            </div>
        </IndexPage>
    )
}

export default FeedMainComponent
