import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { Post } from 'snippy'

function SearchComponent() {
    const [input, setInput] = useState('')
    const [postsListDefault, setPostsListDefault] = useState<any>()
    const [postsList, setPostsList] = useState<Post[]>()

    const fetchData = async () => {
        return await fetch('http://localhost:4000/posts')
            .then((response) => response.json())
            .then((data) => {
                setPostsListDefault(data.posts)
            })
    }

    const updateInput = async (input: any) => {
        const filtered = await postsListDefault.filter((posts: Post) => {
            return posts.snippet.title
                .toLowerCase()
                .includes(input.toLowerCase())
        })
        setInput(input)
        setPostsList(filtered)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <InputGroup>
                <Input
                    value={input}
                    onChange={(e) => updateInput(e.target.value)}
                    placeholder="What are you looking for?"
                />
                <InputRightElement children={<FaSearch color="black" />} />
            </InputGroup>
            {postsList
                ? postsList.map((post) => (
                      <p>{JSON.stringify(post.snippet.title)}</p>
                  ))
                : null}
        </div>
    )
}

export default SearchComponent
