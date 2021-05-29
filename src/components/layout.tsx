import React, { ReactNode } from 'react'
import '../utils/global.css'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import { Site } from '../../types/graphql-types'

const Layout = ({ children }: { children: ReactNode }) => {
  const { site } = useStaticQuery<{ site: Site }>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={site?.siteMetadata?.title ?? ''} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
