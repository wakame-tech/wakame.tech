import { Maybe, Mdx, ReferenceTarget } from "../../types/graphql-types"
import { Entry, Post } from "../model"

const basename = (filePath: string): string => {
  const paths = filePath.split("/")
  const fileName = paths[paths.length - 1]
  return fileName.split(".")[0]
}

export const createEntry = (node: Partial<ReferenceTarget>): Maybe<Entry> => {
  if (
    !node.id ||
    !node.fileAbsolutePath ||
    !node.frontmatter ||
    !node.frontmatter.title ||
    !node.frontmatter.date ||
    !node.frontmatter.tags
  ) {
    console.log(node)
    console.warn(`${node.id} ${node.fileAbsolutePath} frontmatter not found`)
    return undefined
  }

  const fm = node.frontmatter
  const includeFixedTag = fm.tags?.includes("fixed") ?? false
  const includeDraftTag = fm.tags?.includes("draft") ?? false
  const fileBaseName = basename(node.fileAbsolutePath)

  return {
    id: node.id,
    to: `/posts/${fileBaseName}`,
    title: fm.title,
    tags: fm.tags as string[],
    date: fm.date,
    draft: includeDraftTag,
    fixed: includeFixedTag,
  }
}

export const createPost = (node: Partial<Mdx>): Maybe<Post> => {
  const entry = createEntry(node)
  if (!entry || !node.body) {
    return undefined
  }

  const inbounds =
    node.inboundReferences?.map(createEntry)?.filter((e): e is Entry => !!e) ??
    []
  const outbounds =
    node.outboundReferences?.map(createEntry)?.filter((e): e is Entry => !!e) ??
    []

  return {
    ...entry,
    body: node.body,
    inbounds,
    outbounds,
  }
}

export const createPosts = (nodes: Mdx[]): Post[] => {
  return nodes.map(createPost).filter((post): post is Post => !!post)
}

export const createEntries = (nodes: Mdx[]): Entry[] => {
  return nodes.map(createEntry).filter((entry): entry is Entry => !!entry)
}
