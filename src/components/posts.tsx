import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MarkdownRemarkConnection } from '../../types/graphql-types'
import Post from './post'

const Posts = () => {
    const { allMarkdownRemark } = useStaticQuery<{ allMarkdownRemark: MarkdownRemarkConnection }>(graphql`
        {
            # allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date }) {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        title
                        date
                        tags
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
        <div className="grid md:grid-cols-3 grid-cols-1">
            {posts.map(post =>
                <div className="pb-2 md:col-span-2" key={post.id}>
                    <Post
                        title={post.frontmatter?.title ?? ''}
                        date={new Date().toString()}
                        tags={[]}
                        // date={post.frontmatter?.date}
                        // tags={post.frontmatter?.tags as string[] ?? []}
                        content={post.html ?? ''} 
                    />
                </div>
            )}
        </div>
    )
}

export default Posts