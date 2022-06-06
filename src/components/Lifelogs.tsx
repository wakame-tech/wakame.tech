import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MdxConnection } from '../../types/graphql-types'
import { createEntries, createPosts } from '../utils/MdxAdapter'
import EntryRow from './EntryRow'
import Title from './title'

const LifeLogs = () => {
  const { allMdx } = useStaticQuery<{ allMdx: MdxConnection }>(graphql`
    query {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 10
        filter: {
          frontmatter: { tags: { in: ["lifelog", "ポエム"], nin: ["draft"] } }
        }
      ) {
        nodes {
          ...entryFragment

          inboundReferences {
            ... on Mdx {
              ...entryFragment
            }
          }

          outboundReferences {
            ... on Mdx {
              ...entryFragment
            }
          }
        }
      }
    }

    fragment entryFragment on Mdx {
      id
      fileAbsolutePath
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
      }
    }
  `)

  const entries = createEntries(allMdx.nodes)

  return (
    <div>
      <header className="py-2">
        <Title title="take 10 lifelogs" />
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

export default LifeLogs
