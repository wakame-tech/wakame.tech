import { MarkdownRemark } from "../../types/graphql-types_"
import { Post } from "../model"

const basename = (filePath: string): string => {
  const paths = filePath.split("/")
  const fileName = paths[paths.length - 1]
  return fileName.split(".")[0]
}

export const createPost = (node: MarkdownRemark): Post | null => {
  if (
    !node.fileAbsolutePath ||
    !node.frontmatter ||
    !node.frontmatter.title ||
    !node.frontmatter.date ||
    !node.frontmatter.tags
  ) {
    // `${node.id} ${node.fileAbsolutePath} frontmatter not found`
    return null
  }

  const fm = node.frontmatter
  const includeFixedTag = fm.tags?.includes("fixed") ?? false
  const includeDraftTag = fm.tags?.includes("draft") ?? false
  const fileBaseName = basename(node.fileAbsolutePath)

  return {
    id: node.id,
    to: `/posts/${fileBaseName}`,
    title: fm.title!,
    tags: fm.tags as string[],
    date: fm.date,
    draft: includeDraftTag,
    fixed: includeFixedTag,
    html: node.html!,
  }
}

export const createPosts = (nodes: MarkdownRemark[]): Post[] => {
  return nodes.map(createPost).filter((post): post is Post => !!post)
}
