import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ContentfulWork } from "../../types/graphql-types"
import Layout from '../components/layout'
import Seo from '../components/seo'
import WorkComponent from '../components/work'

const WorksPage = () => {
  const { allContentfulWork } = useStaticQuery<{ allContentfulWork: { nodes: ContentfulWork[] } }>(
    graphql`
      {
        allContentfulWork(sort: {fields: date, order: DESC}) {
          nodes {
            id
            tags
            title
            url
            description {
              childMarkdownRemark {
                html
                rawMarkdownBody
              }
            }
            date(formatString: "YYYY-MM-DD")
            thumbnail {
              gatsbyImageData(aspectRatio: 1.7, quality: 100)
            }
          }
        }
      }
    `)

  return (
    <Layout>
      <Seo />

      <article className="p-2">
        <header className="py-2">
          <div className="text-center">
            <h1 className="text-gray-600 text-4xl font-bold">works</h1>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allContentfulWork?.nodes.map(work =>
            <div key={work.id} className="w-full min-h-36">
              <WorkComponent work={work} />
            </div>
          )}
        </div>
      </article>
    </Layout >
  )
}

export default WorksPage
