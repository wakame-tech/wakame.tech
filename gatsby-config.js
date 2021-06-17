require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `wakame.tech`,
    author: 'wakame_tech',
    description: 'ポートフォリオです。',
    ogpImageUrl: 'https://i.imgur.com/hnDPgbO.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
        codegenDelay: 100,
        codegen: true
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `blog-articles`,
        // in dev
        // local: process.env.LOCAL_ARTICLE_PATH,
        remote: `https://github.com/wakame-tech/blog-articles`,
        branch: `main`,
        patterns: `docs/**`
      }
    },
  ],
}
