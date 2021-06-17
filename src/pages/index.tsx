import React, { useEffect } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import WorksComponent from '../components/works'
import Posts from '../components/Posts'
// import initTwitterScriptInner from 'zenn-embed-elements/lib/init-twitter-script-inner'

const IndexPage = () => {
  // @ts-ignore
  // useEffect(() => import('zenn-embed-elements'), [])

  return (
    <Layout>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: initTwitterScriptInner
        }}
      /> */}

      <Seo />

      <div className="bg-green-100 p-4">
        <div className="p-2">
          <Posts />
        </div>

        <div className="p-2">
          <WorksComponent />
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
