import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Site } from '../../types/graphql-types'

type Props = {
  title?: string
}

const Seo = (props: Props) => {
  const { site } = useStaticQuery<{ site: Site }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  const metaDescription = site?.siteMetadata?.description ?? ''
  const title = site?.siteMetadata?.title ?? props.title ?? ''

  return (
    <Helmet
      htmlAttributes={{ lang: 'ja' }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`, // `summary`
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:image`,
          content: 'https://i.imgur.com/hnDPgbO.png',
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

export default Seo
