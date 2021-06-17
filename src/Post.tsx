import React from 'react'
import 'zenn-content-css'
import markdownToHtml from 'zenn-markdown-html'

const Post = (props: { title: string, content: string }) => {
    // const html = markdownToHtml(props.content)

    return (
        <div className="p-2 bg-white shadow-md rounded-xl h-full">
            <h1 className="text-gray-400 text-lg">{props.title}</h1>

            <div className="znc" dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    )
}

export default Post