import React from 'react'
import EntryRow from '../components/entry_row'
import Layout from '../components/layout'
import Posts from '../components/posts'
import Title from '../components/title'
import { slides } from '../utils/slides'

const IndexPage = () => {
  return (
    <Layout>
      <article className="p-2">
        <header className="py-2">
          <Title title="public posts" />
        </header>

        <Posts />
      </article>

      <article className="p-2">
        <header className="py-2">
          <Title title="public slides" />
        </header>

        <div className="m-auto">
          <ul>
            {slides.map(entry =>
              <div className="" key={entry.to}>
                <EntryRow entry={entry} />
              </div>
            )}
          </ul>
        </div>
      </article>
    </Layout>
  )
}

export default IndexPage
