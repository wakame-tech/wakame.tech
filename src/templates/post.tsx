import React from 'react'
import { PostPageContext } from '../gatsby-node'
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

            <div className="p-1">
                <h1 className="text-gray-600 text-2xl font-bold">{pageContext.title}</h1>
                <p className="p-1 text-gray-400">{pageContext.date}</p>
                <div className="p-1">
                    <Tags tags={pageContext.tags} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: pageContext.html ?? '' }} />
            </div>
        </Layout >
    )
}

export default Component