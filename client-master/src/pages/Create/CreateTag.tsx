import React from 'react'
import {
    Button,
    ButtonGroup,
    Editable,
    Flex,
    HStack,
    Icon,
    IconButton,
    Tag,
} from '@chakra-ui/react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { useFieldArray, useWatch, useFormContext } from 'react-hook-form'

export const Tags = () => {
    const { control, register } = useFormContext()
    const { fields, append, remove } = useFieldArray({
        name: 'tag',
        control,
    })
    const formValues = useWatch({
        name: 'tag',
        control,
    })
    return (
        <>
            <Flex mt="30px">
                <ButtonGroup size="sm" variant="tag">
                    <Button border="0" bg="yellow">
                        Add some tags
                    </Button>
                    <IconButton
                        aria-label="Add tag"
                        onClick={() => append({ name: '' })}
                    >
                        <Icon as={FaPlus} boxSize="22px" pr="6px" />
                    </IconButton>
                </ButtonGroup>
                {fields.map((field, i) => (
                    <Editable.Root
                        startWithEditView
                        defaultValue="new tag"
                        key={field.id}
                        borderColor="black"
                    >
                        <Editable.Input
                            {...register(`tag.${i}.name` as const)}
                            borderColor="black"
                        />
                    </Editable.Root>
                ))}
            </Flex>
            {formValues && (
                <CreateTag remove={remove} tags={formValues} />
            )}
        </>
    )
}

const CreateTag = ({
    tags,
    remove,
}: {
    tags: { name: string }[]
    remove: any
}) => {
    return (
        <HStack p="2rem" m="1rem" gap={4}>
            {tags.length >= 1 &&
                tags.map((tag, index) => (
                    <Tag.Root key={tag.name} bg="yellow" borderRadius="0">
                        <Tag.Label>{tag.name}</Tag.Label>
                        <Tag.CloseTrigger onClick={() => remove(index)}>
                            <Icon as={FaTimes} />
                        </Tag.CloseTrigger>
                    </Tag.Root>
                ))}
        </HStack>
    )
}
