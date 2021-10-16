import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import { Snippet } from 'snippy'

//TODO check on Padding

hljs.registerLanguage('javascript', javascript)
hljs.configure({ ignoreUnescapedHTML: true })

type Style = Partial<Snippet>

const Preview = ({ content, style }: Style) => {
    const highlight = () =>
        document.querySelectorAll('div code pre').forEach((snip: any) => {
            hljs.highlightElement(snip)
        })

    useEffect(() => {
        highlight()
        if (style) {
            import(`highlight.js/styles/${style}.css`)
        }
    }, [style])

    return (
        <div
            style={{
                padding: '8px',
                border: '1px solid black',
            }}
        >
            <code dangerouslySetInnerHTML={{ __html: content! }} />
        </div>
    )
}

export default Preview
