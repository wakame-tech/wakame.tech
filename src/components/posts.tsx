import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MarkdownRemarkConnection } from '../../types/graphql-types'
import PostCard from './post_card'

const Posts = () => {
    const { allMarkdownRemark } = useStaticQuery<{ allMarkdownRemark: MarkdownRemarkConnection }>(graphql`
        {
            allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date }) {
                nodes {
                    id
                    frontmatter {
                        title
                        tags
                        date(formatString: "YYYY-MM-DD")
                    }
                }
            }
        }
    `)

    // have title ?
    const posts = allMarkdownRemark.nodes.filter(node => !!node.frontmatter?.title)

    return (
        <div className="m-auto">
            <ul>
                {posts.map(post =>
                    <div className="" key={post.id}>
                        <PostCard
                            id={post.id}
                            tags={post.frontmatter?.tags?.filter(tag => tag).map(tag => tag!!) ?? []}
                            title={post.frontmatter?.title ?? ''}
                            date={post.frontmatter?.date}
                        />
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Posts