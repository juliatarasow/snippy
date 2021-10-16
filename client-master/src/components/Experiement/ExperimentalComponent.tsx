import { Input } from '@chakra-ui/input'
import { Box, Center, Flex, Heading, HStack } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { Subject } from 'rxjs'
import {
    distinctUntilChanged,
    debounceTime,
    filter,
    map,
    switchMap,
} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { Post } from 'snippy'

const ExperimentalComponent = () => {
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
        )
    )

    useEffect(() => {
        const subscription = input$$.subscribe(setResult)

        return () => {
            subscription.unsubscribe()
        }
    }, [input$$])

    return (
        <Center>
            <Box p="3rem">
                <Flex>
                    <HStack>
                        <Heading>Input here!!</Heading>
                        <Input
                            onChange={(event) =>
                                input$.next(event.target.value)
                            }
                            type="text"
                            placeholder="Type..."
                        />
                        {result
                            ? result.map((value: Post) => (
                                  <code>
                                      {JSON.stringify(value.snippet, null, 4)}
                                  </code>
                              ))
                            : null}
                    </HStack>
                </Flex>
            </Box>
        </Center>
    )
}
export default ExperimentalComponent
