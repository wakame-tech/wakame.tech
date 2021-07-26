import { Link } from 'gatsby'
import React from 'react'
import Tags from './tags'

const PostCard = (props: { id: string, title: string, date: string, tags: string[] }) => {
    return (
        <li>
            <Link
                to={`/posts/${props.id}/`}
            >
                <div>
                    <span className="pr-2">{props.date}</span>
                    <span className="text-gray-800">{props.title}</span>
                    <Tags tags={props.tags} />
                </div>
            </Link>
        </li>
    )
}

export default PostCard