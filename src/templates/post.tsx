import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import EntryRow from "../components/entry_row"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tags"
import Title from "../components/title"
import { Post } from "../model"

export type PostPageProps = {
  post: Post
}

const PostPage = ({ pageContext }: { pageContext: PostPageProps }) => {
  const { post } = pageContext

  return (
    <Layout>
      <Seo title={post.title} />
      <article>
        <header>
          <div className="">
            <time className="py-1 text-gray-500 text-sm">{post.date}</time>
            <Title title={post.title} />
            <div className="py-1">
              <Tags tags={post.tags} />
            </div>
          </div>
        </header>

        <div className="m-auto">
          {post.outbounds.length !== 0 && (
            <>
              <h2>参照している記事</h2>

              <ul className="list-none">
                {post.outbounds.map(entry => (
                  <EntryRow key={entry.id} entry={entry} />
                ))}
              </ul>
            </>
          )}
        </div>

        <MDXRenderer>{post.body}</MDXRenderer>

        <div className="m-auto">
          {post.inbounds.length !== 0 && (
            <>
              <h2>参照されている記事</h2>

              <ul className="list-none">
                {post.inbounds.map(entry => (
                  <EntryRow key={entry.id} entry={entry} />
                ))}
              </ul>
            </>
          )}
        </div>
      </article>
    </Layout>
  )
}

export default PostPage
