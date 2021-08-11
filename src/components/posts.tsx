import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MarkdownRemarkConnection } from '../../types/graphql-types'
import PostCard from './post_card'
import { isPublicArticle } from "../utils/ArticleType"

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

    const posts = allMarkdownRemark.nodes.filter(isPublicArticle)

    return (
        <div className="m-auto">
            <ul>
                {posts.map(post =>
                    <div className="" key={post.id}>
                        <PostCard
                            id={post.id}
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