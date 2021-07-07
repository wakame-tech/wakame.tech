import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Posts from '../components/posts'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />

      <div className="bg-green-100 p-2">
        <div className="p-2">
          <Posts />
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
