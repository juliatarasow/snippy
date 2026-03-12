import { FormLabel, FormControl, Input } from '@chakra-ui/react'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'

function CreateField({
    type,
    value,
    variant,
    label,
    cb,
}: {
    type: string
    value: any
    variant: string
    label: string
    cb: UseFormRegister<any>
}) {
    // return (

    //     <Editable fontSize="2xl" defaultValue={placeholder}>
    //         <EditableInput {...cb(value)}  />
    //         <EditablePreview />
    //     </Editable>
    // )

    return (
        <FormControl>
            <Input
                variant={variant}
                type={type}
                textAlign="center"
                placeholder="type here..."
                onFocus={(e) => e.currentTarget.removeAttribute('placeholder')}
                {...cb(value)}
            />
            <FormLabel variant="create" textAlign="center" m="0" pb="24px">
                {label}
            </FormLabel>

            {/*  <Input
                variant="describe"
                type={type}
                value={value}
                placeholder="Description"
                textAlign="center"
                {...cb(value)}
            />
            <FormLabel variant="create" textAlign="center" m="0">
                What is the snippet about?
            </FormLabel> */}
        </FormControl>
    )
}

export default CreateField
