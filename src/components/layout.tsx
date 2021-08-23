import React, { ReactNode } from 'react'
import '../utils/global.css'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import { Site } from '../../types/graphql-types'
import Seo from './seo'
import Footer from './footer'

const Layout = ({ children }: { children: ReactNode }) => {
  const { site } = useStaticQuery<{ site: Site }>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <Seo />
      
      <div className="flex flex-col min-h-screen">
        <Header
          siteTitle={site?.siteMetadata?.title ?? ''}
          siteDescription={site?.siteMetadata?.description ?? ''}
        />

        <main className="flex-grow sm:px-4 md:px-20 pb-10">{children}</main>

        <Footer
          siteAuthor={site?.siteMetadata?.author ?? ''}
        />
      </div>
    </>
  )
}

export default Layout
