import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import WorksComponent from '../components/works'

const WorksPage = () => {
    return (
        <Layout>
            <Seo />

            <div className="bg-green-100 p-4">
                <div className="p-2">
                    <WorksComponent />
                </div>
            </div>
        </Layout >
    )
}

export default WorksPage
