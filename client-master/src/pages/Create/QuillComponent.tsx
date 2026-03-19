import React from 'react'
import ReactQuill from 'react-quill'

import { Field } from '@chakra-ui/react'

import 'react-quill/dist/quill.snow.css'

import { modules, formats } from './QuillSettings/quillSettings'

const QuillComponent = ({ value, onChange }: { value: any; onChange: any }) => {
    return (
        <Field.Root required>
            <ReactQuill
                modules={modules}
                formats={formats}
                placeholder="Input your snippet Code"
                value={value}
                onChange={onChange}
                preserveWhitespace={true}
            ></ReactQuill>
        </Field.Root>
    )
}

export default QuillComponent
