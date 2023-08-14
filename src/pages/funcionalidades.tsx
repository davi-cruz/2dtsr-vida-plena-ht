import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"

const Funcionalidades = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Features" />
        <Features />
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default Funcionalidades
