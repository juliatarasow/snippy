import React from 'react'
import { Box, Center, Grid, GridItem, Heading, Stack } from '@chakra-ui/layout'


import SingleEditableSnippet from './SingleEditableSnippet'
import OverviewComponent from './Overview'

import { User } from 'snippy'

function Dashboard({ user }: { user: User | undefined }) {
    
    return (
        <Center m="2rem">
            <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
            >
                <GridItem
                    rowSpan={2}
                    colSpan={1}
                    children={
                        user ? (
                            user.activities.map((activity, index) => (
                                <Box>
                                    <Heading>User Activities</Heading>
                                    <OverviewComponent
                                        key={index}
                                        activity={activity}
                                    />
                                </Box>
                            ))
                        ) : (
                            <code>Updating ...</code>
                        )
                    }
                />
                <GridItem
                    colSpan={2}
                    children={
                        user
                            ? user?.snippets.map((snippet, index) => (
                                  <SingleEditableSnippet
                                      key={index}
                                      snippet={snippet}
                                  />
                              ))
                            : null
                    }
                />
                <GridItem
                    colSpan={2}
                    children={
                        user
                            ? user.savedSnippets.map((saved, index) => (
                                  <code key={index}>
                                      {JSON.stringify(saved)}
                                  </code>
                              ))
                            : null
                    }
                />
                <GridItem
                    colSpan={4}
                    children={<code>SOME MORE ELEMENTS</code>}
                />
            </Grid>
            <Stack m="2rem"></Stack>
        </Center>
    )
}

export default Dashboard
