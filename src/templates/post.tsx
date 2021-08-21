import React from 'react'
import Layout from '../components/layout'
import Tags from '../components/tags'
import { Post } from '../model'

export type PostPageProps = {
  post: Post
}

const PostPage = ({ pageContext }: { pageContext: PostPageProps }) => {
  const { post } = pageContext

  return (
    <Layout>
      <article className="p-2">
        <header>
          <div className="text-center">
            <time className="p-1 text-gray-400 text-sm">{post.date}</time>
            <h1 className="text-gray-600 text-4xl font-bold">{post.title}</h1>

            <div className="p-1">
              <Tags tags={post.tags} />
            </div>
          </div>
        </header>

        <section
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html ?? '' }}
        />
      </article>
    </Layout >
  )
}

export default PostPage