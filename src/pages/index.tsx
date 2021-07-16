import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Posts from '../components/posts'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />

      <div className="p-2">
        <Posts />
      </div>
    </Layout >
  )
}

export default IndexPage
