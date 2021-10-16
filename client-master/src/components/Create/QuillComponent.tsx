import React from 'react'
import { FormControl } from '@chakra-ui/form-control'
import ReactQuill from 'react-quill'
import { modules, formats } from './QuillSettings/QuillSettings'
import 'react-quill/dist/quill.snow.css'

const QuillComponent = ({ value, onChange }: { value: any; onChange: any }) => {
    return (
        <FormControl isRequired>
            <ReactQuill
                modules={modules}
                formats={formats}
                placeholder="Input your snippet Code"
                value={value}
                onChange={onChange}
                preserveWhitespace={true}
            ></ReactQuill>
        </FormControl>
    )
}

export default QuillComponent
