import { MarkdownRemark } from "../../types/graphql-types"
import { Post } from "../model"

export const nodeToPost = (node: MarkdownRemark): Post | null => {
    if (!node.frontmatter || !node.frontmatter.title || !node.frontmatter.date || !node.frontmatter.tags) {
        `${node.id} ${node.fileAbsolutePath} frontmatter not found`
        return null
    }

    const fm = node.frontmatter
    const includeFixedTag = fm.tags?.includes('fixed') ?? false
    const includeDraftTag = fm.tags?.includes('draft') ?? false

    return {
        id: node.id,
        to: `/posts/${node.id}`,
        title: fm.title!,
        tags: fm.tags as string[],
        date: fm.date,
        draft: includeDraftTag,
        fixed: includeFixedTag,
        html: node.html!,
    }
}

export const getPosts = (nodes: MarkdownRemark[]): Post[] => {
    return nodes
        .map(nodeToPost)
        .filter((post): post is Post => !!post)
}