import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MdxConnection } from '../../types/graphql-types'
import { createEntries } from '../utils/MdxAdapter'
import EntryRow from './EntryRow'
import Title from './title'

const LatestPosts = () => {
  const { allMdx } = useStaticQuery<{
    allMdx: MdxConnection
  }>(graphql`
    {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 20
        filter: {
          fileAbsolutePath: { glob: "**/blog/**" }
          frontmatter: {
            tags: { nin: ["lifelog", "draft", "fixed", "bio", "ポエム"] }
          }
        }
      ) {
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

  const entries = createEntries(allMdx.nodes)

  return (
    <div>
      <header className="py-2">
        <Title title="take 20 latestPosts" />
      </header>

      <div className="m-auto">
        <ul className="list-none">
          {entries.map(entry => (
            <div className="" key={entry.id}>
              <EntryRow entry={entry} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LatestPosts
