import React from 'react'
import { PostPageContext } from '../utils/ArticleType'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Tags from '../components/tags'

type Props = {
    pageContext: PostPageContext
}

const Component = ({ pageContext }: Props) => {
    return (
        <Layout>
            <Seo />

            <article className="p-2">
                <header>
                    <div className="text-center">
                        <time className="p-1 text-gray-400 text-sm">{pageContext.date}</time>
                        <h1 className="text-gray-600 text-4xl font-bold">{pageContext.title}</h1>

                        <div className="p-1">
                            <Tags tags={pageContext.tags} />
                        </div>
                    </div>
                </header>
                
                <section
                    className="markdown" 
                    dangerouslySetInnerHTML={{ __html: pageContext.html ?? '' }}
                />
            </article>
        </Layout >
    )
}

export default Component