import { MarkdownRemark } from "../../types/graphql-types"

export type PostPageContext = {
    id: string
    title: string
    tags: string[]
    date: string
    html: string
}

export const isPublicArticle = (node: MarkdownRemark): boolean => {
    if (!node.frontmatter) {
        return false
    }
    const fm = node.frontmatter
    const hasFrontmatter = !!fm.title && !!fm.date
    const includeFixedTag = fm.tags?.includes('fixed') ?? false
    const includeDraftTag = fm.tags?.includes('draft') ?? false
    return !includeDraftTag && !includeFixedTag && hasFrontmatter
}

export const isFixedArticle = (node: MarkdownRemark): boolean => {
    if (!node.frontmatter) {
        return false
    }
    const fm = node.frontmatter
    const hasFrontmatter = !!fm.title && !!fm.date
    const includeFixedTag = fm.tags?.includes('fixed') ?? false
    return includeFixedTag && hasFrontmatter
}

export const toContext = (node: MarkdownRemark): PostPageContext => {
    const fm = node.frontmatter!
    return {
        id: node.id,
        title: fm.title!,
        tags: fm.tags ? fm.tags!.map(tag => tag!) : [],
        date: fm.date!,
        html: node.html!,
    }
}