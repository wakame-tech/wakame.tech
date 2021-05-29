// import path from "path"
// import { GatsbyNode } from "gatsby"
// import { Site } from "../types/graphql-types"

// type Result = {
//   site: Site
// }

// export type AuthorPageContext = {
//   author: any
// }

// const query = `
// {
//   site {
//     siteMetadata {
//       title
//       author
//     }
//   }
// }
// `

// export const createPages: GatsbyNode["createPages"] = async ({
//   graphql,
//   actions: { createPage }
// }) => {
//   const result = await graphql<Result>(query)
//   if (result.errors || !result.data) {
//     throw result.errors
//   }
//   const { siteMetadata } = result.data.site
//   if (!siteMetadata || !siteMetadata.authors) {
//     throw new Error("undefined authors")
//   }

//   for (let author of siteMetadata.authors) {
//     if (author) {
//       createPage<AuthorPageContext>({
//         path: `/authors/${author.slug}/`,
//         component: path.resolve("src/templates/author.tsx"),
//         context: { author }
//       })
//     }
//   }
// }