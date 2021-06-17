import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import WorksComponent from '../components/works'

const IndexPage = () => (
  <Layout>
    <Seo />

    <div className="p-4">
      <WorksComponent />
    </div>
  </Layout>
)

export default IndexPage
