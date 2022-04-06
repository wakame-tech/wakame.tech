import { CreatePagesArgs, GatsbyNode } from "gatsby"
import path from "path"
import { Mdx, MdxConnection } from "../types/graphql-types"
import { Entry } from "./model"
import { PostPageProps } from "./templates/post"
import { TagsPageProps } from "./templates/tagsPage"
import { createEntries, createPosts } from "./utils/MdxAdapter"
import { slides } from "./utils/slides"

const getAllMdx = async (
  graphql: CreatePagesArgs["graphql"]
): Promise<Mdx[]> => {
  // 記事同士の依存関係も取得
  const query = `
  query {
    allMdx {
      nodes {
        ...entryFragment
        body

        inboundReferences {
          ... on Mdx {
            ...entryFragment
          }
        }

        outboundReferences {
          ... on Mdx {
            ...entryFragment
          }
        }
      }
    }
  }

  fragment entryFragment on Mdx {
    id
    fileAbsolutePath
    frontmatter {
      title
      tags
      date(formatString: "YYYY-MM-DD")
    }
  }
  `

  const result = await graphql<{ allMdx: MdxConnection }>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }

  return result.data.allMdx.nodes
}

const createPostPages = async ({
  graphql,
  actions: { createPage },
}: CreatePagesArgs & {
  traceId: "initial-createPages"
}) => {
  const nodes = await getAllMdx(graphql)
  const posts = createPosts(nodes).filter(post => !post.draft)

  posts
    .filter(post => !post.fixed)
    .forEach(post => {
      createPage<PostPageProps>({
        path: post.to,
        component: path.resolve(__dirname, "../src/templates/post.tsx"),
        context: { post },
      })
    })

  posts
    .filter(post => post.fixed)
    .forEach(post => {
      createPage<PostPageProps>({
        path: `/${post.title}`,
        component: path.resolve(__dirname, "../src/templates/post.tsx"),
        context: { post },
      })
    })
}

export const createTagPages = async ({
  graphql,
  actions: { createPage },
}: CreatePagesArgs & {
  traceId: "initial-createPages"
}) => {
  const nodes = await getAllMdx(graphql)
  const postEntries = createEntries(nodes).filter(
    entry => !(entry.fixed || entry.draft)
  )
  const allEntries = [...postEntries, ...slides]
  const entriesMap: Record<string, Entry[]> = {}

  allEntries.forEach(entry => {
    entry.tags.forEach(tag => {
      if (!Object.keys(entriesMap).includes(tag)) {
        entriesMap[tag] = [entry]
      } else {
        entriesMap[tag].push(entry)
      }
    })
  })

  createPage<TagsPageProps>({
    path: `/tags/`,
    component: path.resolve(__dirname, "../src/templates/tagsPage.tsx"),
    context: {
      entriesMap,
    },
  })
}

export const createPages: GatsbyNode["createPages"] = async (
  createPageArgs: CreatePagesArgs & {
    traceId: "initial-createPages"
  }
) => {
  await createPostPages(createPageArgs)
  await createTagPages(createPageArgs)
}
