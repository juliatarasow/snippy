import { VStack } from '@chakra-ui/react'
import React from 'react'

import Footer from '../Footer'
import CardAside from 'components/Shared/CardAside'
import { popularSnippets, topSnippets } from 'useReactive'

function AsideRight() {
    return (
        <VStack alignItems="start">
            {/* most recent posts */}
            <CardAside
                heading={'most recent'}
                observable={topSnippets}
            />
            {/* most popular posts */}
            <CardAside
                heading={'most popular'}
                observable={popularSnippets}
                
            />
            <Footer />
        </VStack>
    )
}

export default AsideRight
