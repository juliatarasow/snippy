import React, { useState } from 'react'
import { Box, Separator, Field, HStack, NativeSelect, Text } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import styles from './QuillSettings/styling.json'

import Preview from './preview'

const CreateStyles = ({ content }: { content: string }) => {
    const { register } = useFormContext()
    const [style, setStyle] = useState('monokai')

    async function onStyleChange() {
        var selectedStyle: any = document.getElementById('styleSelect')
        if (selectedStyle != null) {
            setStyle(selectedStyle.value)
        }
    }

    const returned = styles.styles.map((map) => (
        <option value={map.style} key={map.style}>
            {map.style}
        </option>
    ))

    return (
        <>
            <Field.Root required>
                <HStack p="1rem" gap={2}>
                    <NativeSelect.Root
                        maxW="300px"
                        borderRadius="0"
                        borderWidth="0"
                        bg="yellow"
                        _hover={{ borderWidth: '1px', borderColor: 'black' }}
                    >
                        <NativeSelect.Field
                            {...register('style')}
                            placeholder="Choose a Style"
                            fontFamily="Roboto Mono"
                            fontWeight="700"
                            id="styleSelect"
                            onChange={onStyleChange}
                        >
                            {returned}
                        </NativeSelect.Field>
                    </NativeSelect.Root>
                    <Text fontSize="15px" fontWeight="500" color="gray">
                        {`Currently using ${style}`}
                    </Text>
                </HStack>
            </Field.Root>
            <Separator />
            <Box p="30px">
                <Preview content={content} style={style} />
            </Box>
        </>
    )
}

export default CreateStyles
