require('dotenv').config();

const siteMetadata = {
  title: `自己否定感`,
  author: "wakame_tech",
  description: "noop",
  ogpImageUrl: "https://i.imgur.com/hnDPgbO.png",
}

const plugins = [
  {
    resolve: "gatsby-plugin-graphql-codegen",
    options: {
      fileName: `types/graphql-types.d.ts`,
      codegenDelay: 100,
      codegen: true,
      codegenConfig: { maybeValue: "T | undefined" },
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      head: false,
      anonymize: true,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${process.env.LOCAL_ARTICLE_PATH}`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-wiki-link`,
        },
        `gatsby-remark-katex`,
        `gatsby-remark-prismjs-title`,
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            showLineNumbers: true,
            noInlineHighlight: false,
          },
        },
      ],
    },
  },
  // `gatsby-plugin-twitter`,
]

module.exports = {
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
    QUERY_ON_DEMAND: true,
  },
  siteMetadata,
  plugins,
}
