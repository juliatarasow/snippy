import { Method } from 'axios'
import { Post, Snippet, User, Comment } from 'snippy'

var user_id = sessionStorage.getItem('user_id') || {
    user_id: '615485639cc34315d306e6c6',
}

/* Utility functions */
const url = 'http://localhost:4000/'

export const fetchData = <T>(
    endpoint: string,
    method: Method,
    payload?: T
): Promise<Response> => {
    return new Promise((resolve, reject) => {
        const response = fetch(url + endpoint, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        if (response) {
            resolve(response)
        } else {
            reject('fetch failed')
        }
    })
}

export const getUserData = async (_id: User['_id']) => {
    let response = await fetchData(`user/profile/${_id}`, 'GET')
    let json = await response.json()
    let user = json.user
    return user
}
export const getPostData = async (_id: Post['_id']) => {
    let response = await fetchData(`posts/saved/${_id}`, 'GET')
    let json = await response.json()
    let post = json.post
    return post
}

export const setUser = async (user: User) => {
    let response = await fetchData('snippet/author', 'POST', {
        author: user._id,
    })
    let json = await response.json()
    let snippets = json.userSnippets!
    return { ...user, verify: true, snippets: [...snippets] }
}

export const savePostSnippet = async (endpoint: string, username: string) => {
    let body = {
        username,
    }
    try {
        let response = await fetchData(endpoint, 'PUT', body)
        let json = await response.json()
        console.log(json)
        return json.userSavedData
    } catch (error) {
        console.log(error)
    }
}

export const createSnippet = async (snippet: Post['snippet']) => {
    try {
        let response = await fetchData('snippet/new', 'POST', snippet)
        let json = await response.json()

        return json.newSnippet
    } catch (error) {
        console.log(error)
    }
}

export const createOne = async (_id: Snippet['_id']) => {
    let body = {
        user: user_id,
        snippet: _id,
    }
    try {
        let response = await fetchData('posts/new', 'POST', body)

        let json = await response.json()
        console.log(json)
        return json.newPost
    } catch (error) {
        console.log(error)
    }
}

export const updateSnippetScore = async (
    _id: Snippet['_id'],
    endpoint: string
) => {
    let body = {
        _id: _id,
    }
    let response = await fetchData(`snippet/${endpoint}`, 'PUT', body)

    let json = await response.json()
    console.log(json.message)
    return json.upvoted
}

export const findOne = (posts: Post[], _id: Post['_id']): Post => {
    const [post] = posts.filter((post) => post._id === _id)
    return post
}

export const saveOne = (
    posts: Post[],
    _id: Post['_id'],
    savedSnippets: User['savedSnippets']
) => {
    const post = findOne(posts, _id)
    savedSnippets!.push(post.snippet)
}

export const updateOne = async (_id: Post['_id'], comment: Comment) => {
    let body = {
        _id: _id,
        username: comment.author.username,
        profile: comment.author.profile,
        comment: comment.comment,
    }
    let response = await fetchData('posts/addcomment', 'PUT', body)

    let json = await response.json()
    return json.newComment
}

export const updateActivity = async (user: User) => {
    let body = [...user.activities]
    let response = await fetchData(`user/profile/edit/${user._id}`, 'PUT', body)

    let json = await response.json()

    return json.activity
}
