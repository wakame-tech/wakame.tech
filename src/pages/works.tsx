import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MdxConnection } from '../../types/graphql-types'
import EntryRow from '../components/entry_row'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Title from '../components/title'
import { Entry } from '../model'
import { createEntries } from '../utils/MdxAdapter'

const WorksPage = () => {
  // const { allMdx } = useStaticQuery<{ allMdx: MdxConnection }>(graphql`
  //   query {
  //     allMdx(
  //       sort: { order: DESC, fields: frontmatter___date }
  //       filter: { fileAbsolutePath: { glob: "products" } }
  //     ) {
  //       nodes {
  //         ...entryFragment
  //       }
  //     }
  //   }

  //   fragment entryFragment on Mdx {
  //     id
  //     fileAbsolutePath
  //     frontmatter {
  //       # title
  //       tags
  //       # date(formatString: "YYYY-MM-DD")
  //     }
  //   }
  // `)

  // const entries = createEntries(allMdx.nodes)
  const entries: Entry[] = []

  return (
    <Layout>
      <Seo title="やったこと" />

      <article className="p-2">
        <header className="py-2">
          <Title title="works" />
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
      </article>
    </Layout>
  )
}

export default WorksPage
