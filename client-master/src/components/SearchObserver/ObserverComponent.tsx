import {
    Center,
    Input,
    ModalBody,
    ModalFooter,
    StackDivider,
    VStack,
} from '@chakra-ui/react'
import React, { useState, useEffect, MutableRefObject } from 'react'
import {
    Subject,
    debounceTime,
    switchMap,
    map,
    filter,
    distinctUntilChanged,
    take,
} from 'rxjs'
import { ajax } from 'rxjs/ajax'
import ResultComponent from './Results'
import { Post } from 'snippy'

const ObserverComponent = ({
    reference,
}: {
    reference: MutableRefObject<null>
}) => {
    const [result, setResult] = useState<any>('')
    const input$ = new Subject<string>()
    const input$$ = input$.pipe(
        debounceTime(500),
        switchMap((query) =>
            ajax<Post>('http://localhost:4000/posts').pipe(
                map((resp) => ({
                    status: resp['status'] === 200,
                    details:
                        resp['status'] === 200 ? resp['response']['posts'] : [],
                    result_hash: Date.now(),
                    query: query,
                }))
            )
        ),
        filter((resp) => resp.status !== false),
        distinctUntilChanged((a, b) => a.result_hash === b.result_hash),
        map((result) =>
            result.details.filter((post: Post) =>
                post.snippet.title.includes(result.query)
            )
        ),
        take(2)
    )

    useEffect(() => {
        const subscription = input$$.subscribe(setResult)

        return () => {
            subscription.unsubscribe()
        }
    }, [input$$])

    return (
        <>
            <ModalBody pb={6}>
                <Center>
                    <Input
                        ref={reference}
                        onChange={(event) => input$.next(event.target.value)}
                        type="text"
                        placeholder="Type..."
                    />
                </Center>
            </ModalBody>
            <ModalFooter>
                <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={4}
                    align="stretch"
                >
                    {result
                        ? result.map(
                              (
                                  value: Post,
                                  i: React.Key | null | undefined
                              ) => (
                                  <ResultComponent
                                      key={i}
                                      snippet={value.snippet}
                                  />
                              )
                          )
                        : null}
                </VStack>
            </ModalFooter>
        </>
    )
}
export default ObserverComponent
