require("dotenv").config()

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
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${process.env.LOCAL_ARTICLE_PATH}`,
      // ignore: [`**/*.md`],
    },
  },
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/src/pages/*`] },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-katex`,
        `gatsby-remark-prismjs-title`,
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            showLineNumbers: true,
            noInlineHighlight: false,
          },
        },
        // {
        //   resolve: "gatsby-remark-obsidian",
        //   options: {
        //     titleToURL: title => `/${title}`,
        //     // markdownFolder: `${process.env.LOCAL_ARTICLE_PATH}`,
        //     highlightClassName: "highlight",
        //   },
        // },
      ],
    },
  },
  `gatsby-plugin-twitter`,
]

module.exports = {
  siteMetadata,
  plugins,
}
