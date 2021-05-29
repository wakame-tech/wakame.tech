import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import WorksComponent from '../components/works'

const IndexPage = () => (
  <Layout>
    <Seo />

    <h1 className="font-bold">Hello Tailwind</h1>

    <WorksComponent />
  </Layout>
)

export default IndexPage
