import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MarkdownRemarkConnection } from '../../types/graphql-types'
import { Post } from '../model'
import { nodeToPost } from '../utils/ArticleType'
import EntryRow from './entry_row'

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

  const posts = allMarkdownRemark.nodes
    .map(nodeToPost)
    .filter((post): post is Post => !!post)
    .filter(post => !post.draft)

  return (
    <div className="m-auto">
      <ul>
        {posts.map(post =>
          <div className="" key={post.id}>
            <EntryRow entry={post} />
          </div>
        )}
      </ul>
    </div>
  )
}

export default Posts