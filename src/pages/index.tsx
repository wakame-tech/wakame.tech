import React from 'react'
import EntryRow from '../components/entry_row'
import Layout from '../components/layout'
import Posts from '../components/posts'
import { Entry } from '../model'

const slides: Entry[] = [
  {
    id: 'slide-1',
    to: 'https://61212c7ff8204108cf30b83a--wizardly-knuth-9be758.netlify.app/1',
    title: 'slidev sample',
    tags: [],
    date: '2021-08-22',
    draft: false,
    fixed: false,
  }
]

const IndexPage = () => {
  return (
    <Layout>
      <article className="p-2">
        <header className="py-2">
          <div className="text-center">
            <h1 className="text-gray-600 text-4xl font-bold">posts</h1>
          </div>
        </header>

        <Posts />
      </article>

      <article className="p-2">
        <header className="py-2">
          <div className="text-center">
            <h1 className="text-gray-600 text-4xl font-bold">slides</h1>
          </div>
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
