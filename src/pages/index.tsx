import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Posts from '../components/posts'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />

      <article className="p-2">
        <header className="py-2">
          <div className="text-center">
            <h1 className="text-gray-600 text-4xl font-bold">posts</h1>
          </div>
        </header>

        <Posts />
      </article>
    </Layout >
  )
}

export default IndexPage
