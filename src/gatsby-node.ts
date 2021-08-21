import path from "path"

import { CreatePagesArgs, GatsbyNode } from "gatsby"
import { MarkdownRemarkConnection } from "../types/graphql-types"
import { nodeToPost } from "./utils/ArticleType"
import { TagsPageProps } from './templates/tagsPage'
import { Entry, Post } from "./model"

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

  const posts = result.data.allMarkdownRemark.nodes
    .map(nodeToPost)
    .filter((post): post is Post => !!post)
    .filter(post => !post.draft)

  posts
    .filter(post => !post.fixed)
    .forEach((post) => {
      createPage<Post>({
        path: post.to,
        component: path.resolve(__dirname, '../src/templates/post.tsx'),
        context: post,
      })
    })

  posts
    .filter(post => post.fixed)
    .forEach(post => {
      createPage<Post>({
        path: `posts/${post.title}`,
        component: path.resolve(__dirname, '../src/templates/post.tsx'),
        context: post,
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
  const entriesMap: Record<string, Entry[]> = {}

  articles
    .forEach((node) => {
      node.frontmatter?.tags?.forEach((tag) => {
        if (tag === 'fixed') {
          return
        }

        if (!Object.keys(entriesMap).includes(tag!!)) {
          entriesMap[tag!!] = [nodeToPost(node)]
        } else {
          entriesMap[tag!!].push(nodeToPost(node))
        }
      })
    })

  console.log(entriesMap)

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

  createPage<TagsPageProps>({
    path: `/tags/`,
    component: path.resolve(__dirname, '../src/templates/tagsPage.tsx'),
    context: {
      entriesMap,
    },
  })
}

export const createPages: GatsbyNode["createPages"] = async (createPageArgs: CreatePagesArgs & {
  traceId: "initial-createPages";
}) => {
  await createPostPages(createPageArgs)
  await createTagPages(createPageArgs)
}