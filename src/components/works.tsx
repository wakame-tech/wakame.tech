import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ContentfulWork } from "../../types/graphql-types"

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
            date
          }
        }
      }
    `)

  return <div>
    {allContentfulWork?.nodes ?
      allContentfulWork?.nodes.map(work =>
        <div key={work.id}>
          <p>{work.title}</p>
          <p>{work.description}</p>
        </div>
      )
      : <></>}
    </div>
}

export default WorksComponent