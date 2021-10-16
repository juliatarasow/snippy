import React from 'react'
import {
    Button,
    ButtonGroup,
    Editable,
    EditableInput,
    Flex,
    HStack,
    Icon,
    IconButton,
    Tag,
    TagCloseButton,
    TagLabel,
    useEditableControls,
} from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
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
                <ButtonGroup size="sm" isAttached variant="tag">
                    <Button border="0" bg="yellow">
                        Add some tags
                    </Button>
                    <IconButton
                        aria-label="Add to friends"
                        icon={
                            <Icon
                                as={FaPlus}
                                onClick={() => append({ name: '' })}
                                boxSize="22px"
                                pr="6px"
                            />
                        }
                    />
                </ButtonGroup>
                {fields.map((field, i) => (
                    // <Input
                    //     variant="tag"
                    //     placeholder="new tag"
                    //     key={field.id}
                    //     {...register(`tag.${i}.name` as const)}
                    // ></Input>

                    <Editable
                        startWithEditView
                        defaultValue="new tag"
                        key={field.id}
                        borderColor="black"
                    >
                        <EditableInput
                            {...register(`tag.${i}.name` as const)}
                            borderColor="black"
                        />
                    </Editable>
                ))}
            </Flex>
            {formValues && (
                <CreateTag remove={remove} tags={formValues}></CreateTag>
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
    function EditableControls({
        value,
        index,
        remove,
    }: {
        value: string
        index: number
        remove: any
    }) {
        const { isEditing } = useEditableControls()

        return isEditing ? (
            <Tag>
                <TagLabel>{value}</TagLabel>
                <EditableInput />
            </Tag>
        ) : (
            <Tag bg="yellow" borderRadius="0">
                <TagLabel>{value}</TagLabel>
                <TagCloseButton onClick={() => remove(index)} />
            </Tag>
        )
    }
    return (
        <HStack p="2rem" m="1rem" spacing={4}>
            {tags.length >= 1 &&
                tags.map((tag, index) => (
                    <Editable
                        key={tag.name}
                        defaultValue={tag.name}
                        textAlign="center"
                    >
                        <EditableControls
                            remove={remove}
                            index={index}
                            value={tag.name}
                        />
                    </Editable>
                ))}
        </HStack>
    )
}
