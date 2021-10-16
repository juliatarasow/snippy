import { Flex, Text } from '@chakra-ui/react'
import IconAside from 'components/Shared/IconAside'
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'

import { getPostData } from 'service/store_services'
import { Post, User } from 'snippy'

import SmallDetail from '../smallPost/SmallDetail'

const SavedPostComponent = ({ saved }: { saved: User['savedSnippets'] }) => {
    const [savedOnes, setSavedOnes] = useState<any[]>()

    useEffect(() => {
        let arr: Post[] = []
        saved.forEach(async (item) => {
            let response = await getPostData(item._id!)
            console.log(response)
            arr.push(response)
        })
        setTimeout(() => {
            setSavedOnes(arr)
        }, 500)

        return () => {
            setSavedOnes([])
        }
    }, [saved])

    const SavedOnesArr = savedOnes?.map((item, index) => (
        <SmallDetail post={item} index={index} />
    ))
    return savedOnes != null && savedOnes.length > 0 ? ( // Guilles snips!
        <>{SavedOnesArr}</>
    ) : (
        <>
            <Flex
                justifyContent="center"
                alignItems="center"
                minW="500px"
                borderColor="#282729"
            >
                <Text
                    fontFamily="Roboto Mono"
                    fontSize="24px"
                    fontWeight="bold"
                >
                    You have no Snippets saved
                </Text>
            </Flex>
        </>
    )
}

export default SavedPostComponent
