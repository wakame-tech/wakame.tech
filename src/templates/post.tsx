import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import EntryRow from '../components/EntryRow'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Tags from '../components/tags'
import Title from '../components/title'
import { Post } from '../model'

export type PostPageProps = {
  post: Post
}

const PostPage = ({ pageContext }: { pageContext: PostPageProps }) => {
  const { post } = pageContext

  return (
    <Layout>
      <Seo title={post.title} />
      <article>
        <header className="w-full">
          <div className="">
            <time className="pt-1 text-neutral-content text-sm">
              {post.date}
            </time>
            <h1 className="text-2xl text-primary-content">{post.title} </h1>
            <div className="py-1">
              <Tags tags={post.tags} />
            </div>
          </div>
        </header>

        {post.outbounds.length !== 0 && (
          <>
            <div className="m-auto pb-8">
              <h4>参照している記事</h4>

              <ul className="list-none">
                {post.outbounds.map(entry => (
                  <EntryRow key={entry.id} entry={entry} />
                ))}
              </ul>
            </div>
          </>
        )}

        <div className="divider divider-horizontal"></div>

        <MDXRenderer>{post.body}</MDXRenderer>

        <div className="divider divider-horizontal"></div>

        {post.inbounds.length !== 0 && (
          <>
            <div className="m-auto pt-8">
              <h4 className="">参照されている記事</h4>

              <ul className="list-none">
                {post.inbounds.map(entry => (
                  <EntryRow key={entry.id} entry={entry} />
                ))}
              </ul>
            </div>
          </>
        )}
      </article>
    </Layout>
  )
}

export default PostPage
