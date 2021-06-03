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
              description
            }
            date
            thumbnail {
              file {
                url
              }
            }
          }
        }
      }
    `)

  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {allContentfulWork?.nodes ?
      allContentfulWork?.nodes.map(work =>
        <div key={work.id} className="h-full w-full">
          <WorkComponent work={work} />
        </div>
      )
      : <></>}
    </div>
}

export default WorksComponent