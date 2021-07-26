import path from "path"

import { GatsbyNode } from "gatsby"
import { MarkdownRemarkConnection } from "../types/graphql-types"

const query = `
{
  allMarkdownRemark {
    nodes {
      id
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
      }
      html
    }
  }
}
`

export type PostPageContext = {
  id: string
  title: string
  tags: string[]
  date: string
  html: string
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions: { createPage }}) => {
  const result = await graphql<{ allMarkdownRemark: MarkdownRemarkConnection }>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }

  const articles = result.data.allMarkdownRemark.nodes
    .filter(node => node.frontmatter?.title && node.frontmatter?.date)
    .filter(node => !(node.frontmatter?.tags?.includes('fixed') ?? false))

  articles
    .forEach((node) => {
      createPage<PostPageContext>({
        path: `/posts/${node.id}/`,
        component: path.resolve(__dirname, '../src/templates/post.tsx'),
        context: {
          id: node.id,
          title: node.frontmatter!.title!,
          tags: node.frontmatter!.tags ? node.frontmatter!.tags!.map(tag => tag!) : [],
          date: node.frontmatter!.date!,
          html: node.html!,
        },
      })
    })

  const fixedArticles = result.data.allMarkdownRemark.nodes
    .filter(node => node.frontmatter?.title)
    .filter(node => (node.frontmatter?.tags?.includes('fixed') ?? false))

  console.log(fixedArticles)
  
    fixedArticles
    .forEach((node) => {
      createPage<PostPageContext>({
        path: `/${node.frontmatter!.title!}/`,
        component: path.resolve(__dirname, '../src/templates/post.tsx'),
        context: {
          id: node.id,
          title: node.frontmatter!.title!,
          tags: node.frontmatter!.tags ? node.frontmatter!.tags!.map(tag => tag!) : [],
          date: node.frontmatter!.date!,
          html: node.html!,
        },
      })
    })
}