import React from 'react'
import Tags from './tags'

const Post = (props: { title: string, content: string, date: string, tags: string[], }) => {
    return (
        <div className="p-2 bg-white shadow-md rounded-xl h-full">
            <h1 className="text-gray-600 text-2xl font-bold">{props.title}</h1>
            <Tags tags={props.tags} />

            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    )
}

export default Post