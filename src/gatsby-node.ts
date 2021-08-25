import path from "path"

import { CreatePagesArgs, GatsbyNode } from "gatsby"
import { MarkdownRemark, MarkdownRemarkConnection } from "../types/graphql-types"
import { Entry } from "./model"
import { createPosts } from "./utils/RemarkNodeAdapter"
import { TagsPageProps } from './templates/tagsPage'
import { PostPageProps } from "./templates/post"
import { slides } from "./utils/slides"

const getAllMarkdownRemark = async (graphql: CreatePagesArgs['graphql']): Promise<MarkdownRemark[]> => {
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
        fileAbsolutePath
      }
    }
  }
  `

  const result = await graphql<{ allMarkdownRemark: MarkdownRemarkConnection }>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }

  return result.data.allMarkdownRemark.nodes
}

const createPostPages = async ({ graphql, actions: { createPage } }: CreatePagesArgs & {
  traceId: "initial-createPages"
}) => {
  const nodes = await getAllMarkdownRemark(graphql)
  const posts = createPosts(nodes)
    .filter(post => !post.draft)

  posts
    .filter(post => !post.fixed)
    .forEach((post) => {
      createPage<PostPageProps>({
        path: post.to,
        component: path.resolve(__dirname, '../src/templates/post.tsx'),
        context: { post }
      })
    })

  posts
    .filter(post => post.fixed)
    .forEach(post => {
      createPage<PostPageProps>({
        path: `/${post.title}`,
        component: path.resolve(__dirname, '../src/templates/post.tsx'),
        context: { post },
      })
    })
}

export const createTagPages = async ({ graphql, actions: { createPage } }: CreatePagesArgs & {
  traceId: "initial-createPages"
}) => {
  const nodes = await getAllMarkdownRemark(graphql)
  const posts = createPosts(nodes)
    .filter(post => !(post.fixed || post.draft))
  const entries = [...posts, ...slides]
  const entriesMap: Record<string, Entry[]> = {}

  entries
    .forEach((entry) => {
      entry.tags.forEach((tag) => {
        if (!Object.keys(entriesMap).includes(tag)) {
          entriesMap[tag] = [entry]
        } else {
          entriesMap[tag].push(entry)
        }
      })
    })

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