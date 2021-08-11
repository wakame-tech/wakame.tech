import { Link } from 'gatsby'
import React from 'react'

const PostCard = (props: { id: string, title: string, date: string }) => {
    return (
        <li>
            <span className="pr-2 text-gray-600">{props.date}</span>
            <Link to={`/posts/${props.id}/`} >
                <span>{props.title}</span>
            </Link>
        </li>
    )
}

export default PostCard