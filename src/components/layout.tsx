import React, { ReactNode } from 'react'
import '../utils/global.css'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import { Site } from '../../types/graphql-types'
import Seo from './seo'

const Layout = ({ children }: { children: ReactNode }) => {
  const { site } = useStaticQuery<{ site: Site }>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Seo />
      <Header
        siteTitle={site?.siteMetadata?.title ?? ''}
        siteDescription={site?.siteMetadata?.description ?? ''}
      />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
