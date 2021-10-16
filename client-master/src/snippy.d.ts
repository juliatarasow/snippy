export interface User {
    _id: string
    username: string
    firstname: string
    email: string
    password?: string
    profile: string
    dates?: { created: numbers }
    token?: string
    message?: string
    verify: boolean
    lastname?: string
    savedSnippets: Snippet[]
    snippets: Snippet[]
    activities: string[]
}

export interface Snippet {
    dates?: {
        created: numbers
    }
    upvote: number
    downvote: number
    favourite?: boolean
    tags?: string[]
    _id?: string
    title: string
    content: string | any
    description?: string
    author: {
        _id: string
        username: string
        profile: string
    }
    language?: string
    style?: string
    __v?: number
}

export interface Comment {
    author: Snippet['author']
    comment: string
    createdAt: number
}

export interface Post {
    key: number
    _id: string
    user: {
        _id: string
        username: string
        profile: string
    }
    snippet: Snippet
    comments: Comment[]
    score: number
    isSaved: number
    isShared?: number
    dates: { created: number }
}

interface Response {
    data: Data
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
}

interface Request {}

interface Config {
    url: string
    method: string
    data: string
    headers: Headers2
    transformRequest: null[]
    transformResponse: null[]
    timeout: number
    xsrfCookieName: string
    xsrfHeaderName: string
    maxContentLength: number
    maxBodyLength: number
}

interface Headers2 {
    Accept: string
    'Content-Type': string
    'cache-control': string
    'Access-Control-Allow-Headers': string
    authorization: string
    'x-api-key': string
}

interface Headers {
    'content-length': string
    'content-type': string
}

interface Data {
    message: string
    token: string
    user: User
}

interface Dates {
    registered: string
}
