import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 - NOT FOUND</h1>
    <p>A página procurada não existe...</p>
  </Layout>
)

export default NotFoundPage
