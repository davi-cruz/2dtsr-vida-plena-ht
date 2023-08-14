import React from "react"

import ThemeProvider from "@material-ui/styles/ThemeProvider"
import SEO from "../components/seo"
import theme from "../theme"
import Layout from "../components/layout"
import Hero from "../components/hero"
import AboutPanel from "../components/about-panel"
import AppsPanel from "../components/apps-panel"

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <AboutPanel />
        <AppsPanel />
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
