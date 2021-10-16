/* eslint-disable no-unused-expressions */
import React, { useState, useLayoutEffect } from 'react'
import { Subject } from 'rxjs'

const subject = new Subject()

const initialState = {
    data: [],
    newDataCount: 0,
}

let state = initialState

const chatStore = {
    init: () => {
        state = { ...state, newDataCount: 0 }
        subject.next(state)
    },
    subscribe: (setState) => subject.subscribe(setState),
    sendMessage: (message) => {
        state = {
            ...state,
            data: [...state.data, message],
            newDataCount: state.newDataCount + 1,
        }
        subject.next(state)
    },
}
function ChatComponent() {
    const [chatState, setChatState] = useState(chatStore.initialState)

    setInterval(() => {
        chatStore.sendMessage('Hello')
    }, 10000)

    useLayoutEffect(() => {
        chatStore.subscribe(setChatState)
        chatStore.init()
    }, [])

    return <div>{JSON.stringify(chatState, null, 4)}</div>
}

export default ChatComponent
