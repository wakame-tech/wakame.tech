import { useLocation } from "@reach/router"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const { pathname } = useLocation()

  return (
    <Layout>
      <Seo title="404" />
      <h1>404?</h1>
      <p>
        <code>{pathname}</code> is not found or in a private vault...
      </p>
    </Layout>
  )
}

export default NotFoundPage
