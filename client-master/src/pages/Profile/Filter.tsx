import React from 'react'
import { HStack } from '@chakra-ui/react'

import FilterItem from './FilterItem'

function Filter({cb}: {cb: React.Dispatch<React.SetStateAction<string>>}) {
    return (
        <div>
            <HStack
                py="8px"
                minW="688px"
                flexDir="row"
                justifyContent="start"
                spacing={6}
            >
                <FilterItem title="overview" onclick={cb} />
                <FilterItem title="created" onclick={cb} />
                <FilterItem title="saved" onclick={cb} />
                <FilterItem title="upvoted" onclick={cb} />
                <FilterItem title="downvoted" onclick={cb} />
                <FilterItem title="commented" onclick={cb} />
            </HStack>
        </div>
    )
}

export default Filter
