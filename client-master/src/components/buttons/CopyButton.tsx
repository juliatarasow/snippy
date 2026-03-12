import React, {useState} from 'react'

const CopyButton = (props: any) => {
    const [buttonText, setText] = useState('Copy')
    return (
        <button
            onClick={(e) => {
                navigator.clipboard.writeText(props.code)
                setText('Done')
                setTimeout(() => {
                    setText('Copy')
                }, 1000)
            }}
        >
            {buttonText}
        </button>
    )
}

export default CopyButton
