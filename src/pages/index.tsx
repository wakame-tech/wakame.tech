import React from 'react'
import LatestPosts from '../components/LatestPosts'
import Layout from '../components/layout'
import LifeLogs from '../components/Lifelogs'
import Seo from '../components/seo'
import Slides from '../components/Slides'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Posts" />

      <article className="p-2">
        <LatestPosts />
      </article>

      <article className="p-2">
        <LifeLogs />
      </article>

      <article className="p-2">
        <Slides />
      </article>
    </Layout>
  )
}

export default IndexPage
