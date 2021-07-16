import { Link } from 'gatsby'
import React from 'react'

const PostCard = (props: { id: string, title: string, date: string, tags: string[] }) => {
    return (
        <li>
            <Link
                to={`/posts/${props.id}/`}
            >
                <span className="pr-2">{props.date}</span>
                <span className="pr-2 text-gray-500">[{props.tags.join(',')}]</span>
                <span className="text-green-700">{props.title}</span>
            </Link>
        </li>
    )
}

export default PostCard