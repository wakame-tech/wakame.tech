import path from "path"

import { CreatePagesArgs, GatsbyNode } from "gatsby"
import { MarkdownRemarkConnection } from "../types/graphql-types"
import { isPublicArticle, isFixedArticle, PostPageContext, toContext } from "./utils/ArticleType"
import { TagsPageContext } from './templates/tagsPage'

const createPostPages = async ({ graphql, actions: { createPage } }: CreatePagesArgs & {
  traceId: "initial-createPages"
}) => {
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

export const createTagPages = async ({ graphql, actions: { createPage } }: CreatePagesArgs & {
  traceId: "initial-createPages"
}) => {
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
      }
    }
  }
  `

  const result = await graphql<{ allMarkdownRemark: MarkdownRemarkConnection }>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }

  const articles = result.data.allMarkdownRemark.nodes
  const tags: Record<string, { date: string, title: string, id: string }[]> = {}

  articles
    .forEach((node) => {
      node.frontmatter?.tags?.forEach((tag) => {
        if (tag === 'fixed') {
          return
        }

        if (!Object.keys(tags).includes(tag!!)) {
          tags[tag!!] = [
            {
              id: node.id,
              date: node.frontmatter!.date!!,
              title: node.frontmatter!.title!!,
            }
          ]
        } else {
          tags[tag!!].push({
            id: node.id,
            date: node.frontmatter!.date!!,
            title: node.frontmatter!.title!!,
          })
        }
      })
    })

  console.log(tags)

  // Object.keys(tags)
  //   .forEach((tag) => {
  //     createPage<TagPageContext>({
  //       path: `/tags/${tag}`,
  //       component: path.resolve(__dirname, '../src/templates/tagPage.tsx'),
  //       context: {
  //         tag,
  //       },
  //     })
  //   })

  createPage<TagsPageContext>({
    path: `/tags/`,
    component: path.resolve(__dirname, '../src/templates/tagsPage.tsx'),
    context: {
      tags,
    },
  })
}

export const createPages: GatsbyNode["createPages"] = async (createPageArgs: CreatePagesArgs & {
  traceId: "initial-createPages";
}) => {
  await createPostPages(createPageArgs)
  await createTagPages(createPageArgs)
}