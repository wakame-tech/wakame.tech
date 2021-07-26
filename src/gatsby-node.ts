import path from "path"

import { GatsbyNode } from "gatsby"
import { MarkdownRemarkConnection } from "../types/graphql-types"
import { isPublicArticle, isFixedArticle, PostPageContext, toContext } from "./utils/ArticleType"

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

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql<{ allMarkdownRemark: MarkdownRemarkConnection }>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }

  const articles = result.data.allMarkdownRemark.nodes

  articles
    .filter(isPublicArticle)
    .forEach((node) => {
      createPage<PostPageContext>({
        path: `/posts/${node.id}/`,
        component: path.resolve(__dirname, '../src/templates/post.tsx'),
        context: toContext(node),
      })
    })

  articles
    .filter(isFixedArticle)
    .forEach((node) => {
      createPage<PostPageContext>({
        path: `/${node.frontmatter!.title!}/`,
        component: path.resolve(__dirname, '../src/templates/post.tsx'),
        context: toContext(node),
      })
    })
}