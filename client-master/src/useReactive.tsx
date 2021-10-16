import React, { createContext, useContext } from 'react'
import { BehaviorSubject, interval, map, take } from 'rxjs'
import { Post } from 'snippy'
export const rawSnippet$ = new BehaviorSubject<Post[]>([])
/* 
export const topSnippets = rawSnippet$.pipe(
  map((results) => results.filter((r) => r.upvotes > 2))
); */
fetch('http://localhost:4000/posts')
    .then((res) => res.json())
    .then((data) => rawSnippet$.next(data.posts))

export const topSnippets = rawSnippet$.pipe(
    map((snip) =>
        snip
            .map((data) => ({
                ...data,
            }))
            .sort((a, b) => (a.snippet.dates?.created < b.snippet.dates?.created ? 1 : -1)).slice(0, 4)
    ),
    
)

export const popularSnippets = rawSnippet$.pipe(
    map((snip) => 
    snip
    .map((data) => ({
        ...data,
    }))
    .sort((a, b) => (a.comments.length < b.comments.length ? 1 : -1)).slice(0, 4)
    ),
   
    
)
export const comment$ = rawSnippet$.pipe(
    map((snip) =>
        snip.map((data) => ({
            ...data.comments,
        }))
    )
)

export const sortedPost$ = rawSnippet$.pipe(
    map((snip) => snip.reverse())
)

const SnipContext = createContext({
    topSnippets,
    rawSnippet$,
    comment$,
    sortedPost$
})

export const useSnips = () => useContext(SnipContext)

export const SnipProvider: React.FunctionComponent = ({ children }) => (
    <SnipContext.Provider value={{ topSnippets, rawSnippet$, comment$, sortedPost$ }}>
        {children}
    </SnipContext.Provider>
)
