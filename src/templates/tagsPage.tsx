import React from 'react'
import Layout from '../components/layout'
import EntryRow from '../components/entry_row'
import Seo from '../components/seo'
import { Entry } from '../model'
import Title from '../components/title'

export type TagsPageProps = {
  entriesMap: Record<string, Entry[]>,
}

const TagsPage = ({ pageContext }: { pageContext: TagsPageProps }) => {
  const { entriesMap } = pageContext

  return (
    <Layout>
      <Seo />

      <article className="p-2">
        <header>
          <Title title="タグ一覧" />
        </header>

        {Object.entries(entriesMap)
          .map(([tag, entries]) => {
            return (
              <div>
                <h2 className="py-2 text-gray-600 text-xl font-bold">{tag}</h2>

                <ul>
                  {entries
                    .sort((a, b) => (new Date(b.date).getTime()) - (new Date(a.date).getTime()))
                    .map(entry => <EntryRow key={entry.id} entry={entry} />)}
                </ul>
              </div>
            )
          })}
      </article>
    </Layout >
  )
}

export default TagsPage