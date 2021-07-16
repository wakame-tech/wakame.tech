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

            <div className="p-2">
                <h1 className="text-gray-600 text-2xl font-bold">{pageContext.title}</h1>
                <Tags tags={pageContext.tags} />
                <hr className="py-2" />

                <div dangerouslySetInnerHTML={{ __html: pageContext.html ?? '' }} />
            </div>
        </Layout >
    )
}

export default Component