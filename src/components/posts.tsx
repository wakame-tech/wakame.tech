import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { MarkdownRemarkConnection } from "../../types/graphql-types"
import { createPosts } from "../utils/RemarkNodeAdapter"
import EntryRow from "./entry_row"

const Posts = () => {
  const { allMarkdownRemark } = useStaticQuery<{
    allMarkdownRemark: MarkdownRemarkConnection
  }>(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          id
          frontmatter {
            title
            tags
            date(formatString: "YYYY-MM-DD")
          }
          fileAbsolutePath
        }
      }
    }
  `)

  const posts = createPosts(allMarkdownRemark.nodes).filter(
    post => !post.draft && !post.fixed
  )

  return (
    <div className="m-auto">
      <ul className="list-none">
        {posts.map(post => (
          <div className="" key={post.id}>
            <EntryRow entry={post} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Posts
