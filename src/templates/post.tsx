import React from "react"
import Layout from "../components/layout"
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
      <article>
        <header>
          <div className="text-center">
            <time className="p-1 text-gray-400 text-sm">{post.date}</time>

            <Title title={post.title} />

            <div className="p-1">
              <Tags tags={post.tags} />
            </div>
          </div>
        </header>

        <div>
          <section
            className="markdown"
            dangerouslySetInnerHTML={{ __html: post.html ?? "" }}
          />
        </div>
      </article>
    </Layout>
  )
}

export default PostPage
