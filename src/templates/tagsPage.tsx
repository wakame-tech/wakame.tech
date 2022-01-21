import React from "react"
import EntryRow from "../components/entry_row"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/title"
import { Entry } from "../model"

export type TagsPageProps = {
  entriesMap: Record<string, Entry[]>
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

        {Object.entries(entriesMap).map(([tag, entries]) => {
          return (
            <div>
              <h2 className="pt-2 text-gray-800 text-lg font-bold">#{tag}</h2>

              <ul className="list-none">
                {entries
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map(entry => (
                    <EntryRow key={entry.id} entry={entry} />
                  ))}
              </ul>
            </div>
          )
        })}
      </article>
    </Layout>
  )
}

export default TagsPage
