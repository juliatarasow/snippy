import { Field, Input } from '@chakra-ui/react'
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
    return (
        <Field.Root>
            <Input
                variant={variant}
                type={type}
                textAlign="center"
                placeholder="type here..."
                onFocus={(e) => e.currentTarget.removeAttribute('placeholder')}
                {...cb(value)}
            />
            <Field.Label textAlign="center" m="0" pb="24px">
                {label}
            </Field.Label>
        </Field.Root>
    )
}

export default CreateField
