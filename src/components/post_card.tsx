import { Link } from 'gatsby'
import React from 'react'

const PostCard = (props: { id: string, title: string, date: string, tags: string[] }) => {
    return (
        <li>
            <Link
                to={`/posts/${props.id}/`}
            >
                <div>
                    <span className="pr-2">{props.date}</span>
                    <span className="text-green-700">{props.title}</span>
                </div>
            </Link>
        </li>
    )
}

export default PostCard