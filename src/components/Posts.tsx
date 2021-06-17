import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MarkdownRemarkConnection } from '../../types/graphql-types'
import Post from '../Post'

const Posts = () => {
    const { allMarkdownRemark } = useStaticQuery<{ allMarkdownRemark: MarkdownRemarkConnection }>(graphql`
        {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        title
                    }
                    rawMarkdownBody
                    html
                }
            }
        }
    `)

    // have title ?
    const posts = allMarkdownRemark.nodes.filter(node => !!node.frontmatter?.title)

    console.log(posts)

    return (
        <div className="grid grid-cols-1 md:grid-cols-1">
            {posts.map(post =>
                <div key={post.id}>
                    <Post title={post.frontmatter?.title ?? ''} content={post.html ?? ''} />
                </div>
            )}
        </div>
    )
}

export default Posts