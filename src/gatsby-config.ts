// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config(`${__dirname}/../.env`)
import type { GatsbyConfig } from 'gatsby'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  title: `過ぎるだけの時間じゃ悔しい`,
  author: 'wakame_tech',
  description: 'noop',
  ogpImageUrl: 'https://i.imgur.com/yfCPFXf.png',
}

const plugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-windicss`,
  {
    resolve: 'gatsby-plugin-graphql-codegen',
    options: {
      fileName: `types/graphql-types.d.ts`,
      codegenDelay: 100,
      codegen: true,
      codegenConfig: { maybeValue: 'T | undefined' },
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
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
  // blog posts
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/${process.env.LOCAL_VAULT_PATH!}/blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `products`,
      path: `${__dirname}/${process.env.LOCAL_VAULT_PATH!}/products`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/${process.env.LOCAL_VAULT_PATH!}/_paste`,
    },
  },
  {
    resolve: `gatsby-transformer-markdown-references`,
    options: {
      types: ['Mdx'],
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.md`],
      // ref: <https://nickymeuleman.netlify.app/blog/math-gatsby-mdx>
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-hashtag`,
          options: {
            toTag: (tag: string) => `/tags/`,
          },
        },
        {
          resolve: 'gatsby-remark-obsidian',
          options: {
            // all blog posts are in /posts/
            titleToURL: (title: string) => `/posts/${title}`,
            markdownFolder: `${__dirname}/${process.env.LOCAL_VAULT_PATH}/blog`,
            highlightClassName: 'highlight',
          },
        },
        `gatsby-remark-images`,
        `gatsby-remark-prismjs-title`,
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            showLineNumbers: true,
            noInlineHighlight: false,
          },
        },
        `gatsby-remark-autolink-headers`,
      ],
    },
  },
  {
    resolve: `gatsby-transformer-markdown-references`,
    options: {
      types: ['Mdx'],
    },
  },
  `gatsby-plugin-twitter`,
]

const config: GatsbyConfig = {
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
    QUERY_ON_DEMAND: true,
  },
  siteMetadata,
  plugins,
}

export default config
