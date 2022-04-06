import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { Site } from "../../types/graphql-types"

type Props = {
  title: string
}

const Seo = (props: Props) => {
  const { site } = useStaticQuery<{ site: Site }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
            ogpImageUrl
          }
        }
      }
    `
  )

  const metaDescription = site?.siteMetadata?.description ?? ""
  const pageTitle = `${props.title} | ${site?.siteMetadata?.title}`
  const ogpImageUrl = site?.siteMetadata?.ogpImageUrl ?? ""

  return (
    <Helmet
      htmlAttributes={{ lang: "ja", "data-theme": "dark" }}
      title={pageTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          name: `og:image`,
          content: ogpImageUrl,
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
          content: pageTitle,
        },
        {
          name: `twitter:image`,
          content: ogpImageUrl,
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
