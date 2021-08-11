import React from 'react'
import Layout from '../components/layout'
import PostCard from '../components/post_card'
import Seo from '../components/seo'

export type TagsPageContext = {
    tags: Record<string, {
        date: string,
        title: string,
        id: string
    }[]>,
}

type Props = {
    pageContext: TagsPageContext
}

const Component = ({ pageContext }: Props) => {
    return (
        <Layout>
            <Seo />

            <article className="p-2">
                <header>
                    <div className="text-center">
                        <h1 className="text-gray-600 text-4xl font-bold">Tags</h1>
                    </div>
                </header>

                {Object.entries(pageContext.tags).map(([tag, posts]) => {
                    return (
                        <div>
                            <h2 className="py-2 text-gray-600 text-xl font-bold">{tag}</h2>

                            <ul>
                                {posts
                                    .sort((a, b) => (new Date(b.date).getTime()) - (new Date(a.date).getTime()))
                                    .map(post => <PostCard key={post.id} {...post} />)}
                            </ul>
                        </div>
                    )
                })}
            </article>
        </Layout >
    )
}

export default Component