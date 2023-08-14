import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Grid  item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: 600 }}
        >
      <Typography variant="h2" color="inherit">
        404 - Not Found
      </Typography>
      <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
        A página procurada não existe...
      </Typography>
    </Grid>
  </Layout>
)

export default NotFoundPage
