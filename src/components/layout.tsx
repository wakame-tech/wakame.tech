import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import { Site } from "../../types/graphql-types"
import "../utils/global.css"
import Footer from "./footer"
import Header from "./header"

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
      <div className="flex flex-col min-h-screen">
        <Header
          siteTitle={site?.siteMetadata?.title ?? ""}
          siteDescription={site?.siteMetadata?.description ?? ""}
        />

        <main className="flex-grow px-4 md:px-20 pb-10 text-black dark:text-white bg-light-100 dark:bg-dark-700">
          {children}
        </main>

        <Footer siteAuthor={site?.siteMetadata?.author ?? ""} />
      </div>
    </>
  )
}

export default Layout
