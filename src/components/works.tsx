import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ContentfulWork } from "../../types/graphql-types"
import WorkComponent from './work'

const WorksComponent = () => {
  const { allContentfulWork } = useStaticQuery<{ allContentfulWork: { nodes: ContentfulWork[] } }>(
    graphql`
      query {
        allContentfulWork(sort: { fields: date, order: DESC }) {
          nodes {
            id
            tags
            title
            genre
            description {
              childMarkdownRemark {
                html
                rawMarkdownBody
              }
            }
            date
            thumbnail {
              gatsbyImageData(aspectRatio: 1.7, quality: 100)
            }
          }
        }
      }
    `)

  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {allContentfulWork?.nodes ?
      allContentfulWork?.nodes.map(work =>
        <div key={work.id} className="w-full min-h-36">
          <WorkComponent work={work} />
        </div>
      )
      : <></>}
    </div>
}

export default WorksComponent