import { MarkdownRemark } from "../../types/graphql-types"
import { Post } from "../model"

export const nodeToPost = (node: MarkdownRemark): Post => {
    if (!node.frontmatter || !node.frontmatter.title || !node.frontmatter.date || !node.frontmatter.tags) {
        throw 'frontmatter not found'
    }

    const fm = node.frontmatter
    const includeFixedTag = fm.tags?.includes('fixed') ?? false
    const includeDraftTag = fm.tags?.includes('draft') ?? false

    return {
        id: node.id,
        to: `posts/${node.id}`,
        title: fm.title!,
        tags: fm.tags as string[],
        date: fm.date,
        draft: includeDraftTag,
        fixed: includeFixedTag,
        html: node.html!,
    }
}