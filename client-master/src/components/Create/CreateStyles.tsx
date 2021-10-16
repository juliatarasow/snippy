import React, { useState } from 'react'
import {
    Box,
    Divider,
    FormControl,
    HStack,
    Select,
    Text,
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import styles from './QuillSettings/styling.json'

import Preview from './preview'

const CreateStyles = ({ content }: { content: string }) => {
    const { register } = useFormContext()
    const [style, setStyle] = useState('monokai')
    async function onStyleChange() {
        var selectedStyle: any = document.getElementById('styleSelect')

        if (selectedStyle != null) {
            var styleValue = selectedStyle.value
            setStyle(styleValue)
        }
    }

    const returned = styles.styles.map((map) => {
        return (
            <option value={map.style} key={map.style}>
                {map.style}
            </option>
        )
    })
    return (
        <>
            <FormControl isRequired>
                <HStack p="1rem" spacing={2}>
                    <Select
                        {...register('style')}
                        placeholder="Choose a Style"
                        borderRadius="0"
                        borderWidth="0"
                        maxW="300px"
                        fontFamily="Roboto Mono"
                        fontWeight="700"
                        bg="yellow"
                        id="styleSelect"
                        onChange={onStyleChange}
                        _hover={{
                            borderWidth: '1px',
                            borderColor: 'black',
                        }}
                    >
                        {returned}
                    </Select>
                    <Text
                        fontSize="15px"
                        fontWeight="500"
                        color="gray"
                    >{`Currently using ${style}`}</Text>
                </HStack>
            </FormControl>
            <Divider />
            <Box p="30px">
                {/* <PrismRenderComponent code={content}></PrismRenderComponent> */}
                <Preview content={content} style={style}></Preview>
            </Box>
        </>
    )
}

export default CreateStyles
