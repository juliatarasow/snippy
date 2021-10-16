import { proxy, subscribe as valtioSubscribe, snapshot } from 'valtio'
import { Post, Snippet, Comment, User } from 'snippy'
import {
    setUser,
    savePostSnippet,
    createSnippet,
    createOne,
    updateSnippetScore,
    findOne,
    saveOne,
    updateOne,
    updateActivity,
} from 'service/store_services'

const addComment = (posts: Post[], key: string, comment: Comment): void => {
    const post = findOne(posts, key)
    post.comments.push(comment)
}

const upvotePost = (posts: Post[], key: string) => {
    const [post] = posts.filter((post) => post._id === key)
    post.score++
}

const downvotePost = (posts: Post[], key: string) => {
    const [post] = posts.filter((post) => post._id === key)
    post.score--
}

const removePost = (posts: Post[], key: number): Post[] =>
    posts.filter((post) => post.key !== key)

const removeSnippet = (snippets: Snippet[], _id: Snippet['_id']): Snippet[] =>
    snippets.filter((snip) => snip._id !== _id)

const updatePost = (posts: Post[], key: number, post: Post): Post[] =>
    posts.map((post) => ({
        ...post,
    }))
const registerActivity = (
    user: User,
    posts: Post[],
    _id: Post['_id'],
    activity?: string
): string => {
    const post = findOne(posts, _id)
    let string = `${user.username} ${activity} ${post.snippet.title} `
    return string
}

export interface Store {
    activeUser: Snippet['author'] & User
    posts: Post[]
    newPost: Post
    newComment: Comment
    setActiveUser: (payload: User) => void
    publishSnippet: () => void
    saveSnippet: (key: string) => void
    addPost: (_id: Post['snippet']['_id']) => void
    addComment: (key: string) => void
    upvotePost: (key: string, _id: Post['snippet']['_id']) => void
    downvotePost: (key: string, _id: Post['snippet']['_id']) => void
    removePost: (key: number) => void
    removeSnippet: (_id: Snippet['_id']) => void
    updatePost: (_id: number) => void
    savePost: (_id: Post['_id']) => void
}

const store = proxy<Store>({
    activeUser: {
        _id: '',
        username: '',
        firstname: '',
        email: '',
        profile: '',
        savedSnippets: [],
        snippets: [],
        activities: [],
        verify: true,
    },
    posts: [],
    newPost: {
        _id: '',
        dates: { created: Date.now() },
        snippet: {
            _id: '',
            title: '',
            content: '',
            author: {
                _id: '',
                username: '',
                profile: '',
            },
            upvote: 0,
            downvote: 0,
        },
        user: {
            _id: '',
            username: '',
            profile: '',
        },
        key: 0,
        comments: [],
        score: 0,
        isSaved: 0,
    },
    newComment: {
        author: {
            _id: '',
            username: '',
            profile: '',
        },
        comment: '',
        createdAt: 0,
    },
    setActiveUser: async (payload) => {
        store.activeUser = await setUser(payload)
    },
    publishSnippet: async () => {
        await createSnippet(store.newPost.snippet)
    },
    saveSnippet: (key) => {
        saveOne(store.posts, key, store.activeUser.savedSnippets)
    },
    addPost: async (_id) => {
        store.newPost = await createOne(_id)
    },
    addComment: async (key) => {
        store.newComment = await updateOne(key, store.newComment)
        addComment(store.posts, key, store.newComment)
    },
    upvotePost: (key, _id) => {
        upvotePost(store.posts, key)
        updateSnippetScore(_id, 'upvote')
    },
    downvotePost: (key, _id) => {
        downvotePost(store.posts, key)
        updateSnippetScore(_id, 'downvote')
    },
    removePost: (key) => {
        removePost(store.posts, key)
    },
    removeSnippet: (_id) => {
        removeSnippet(store.activeUser.snippets, _id)
    },
    updatePost: (_id) => {
        updatePost(store.posts, _id, store.newPost)
    },
    savePost: async (_id) => {
        saveOne(store.posts, _id, store.activeUser.savedSnippets)
        await savePostSnippet(`user/savepost/${_id}`, store.activeUser.username)
        store.activeUser.activities = [
            ...store.activeUser.activities,
            registerActivity(store.activeUser, store.posts, _id, 'saved'),
        ]
        updateActivity(store.activeUser)
    },
})

export interface Styles {
    style: string
}

export const load = (client: string): void => {
    fetch(`http://localhost:4000/${client}`)
        .then((resp) => resp.json())
        .then((data) => {
            store.posts = data.posts
        })
}

export const subscribe = (callback: (state: Store) => void): (() => void) => {
    callback(snapshot(store))
    return valtioSubscribe(store, () => callback(snapshot(store)))
}

export default store
