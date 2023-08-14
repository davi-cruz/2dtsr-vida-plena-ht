import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          course
          description
        }
      }
    }
  `)

  const today = new Date()
  const year = today.getFullYear()

  return (
    <React.Fragment>
      <Box className="footer">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            minHeight: 250,
            color: "#FFF",
          }}
        >
          <Grid
            xs={12}
            sm={6}
            item
            container
            direction="column"
            justify="space-evenly"
            style={{ padding: 10 }}
          >
            <Typography variant="h4" color="inherit">
              {data.site.siteMetadata.title}
            </Typography>
            <Typography variant="body2" color="inherit">
              {data.site.siteMetadata.description}
            </Typography>
            <Typography variant="body2" color="inherit">
              © {data.site.siteMetadata.title} {year}. Todos os direitos
              reservados
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className="attribution">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: "#FFF",
            paddingLeft: 5,
            paddingRight: 5,
          }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="inherit">
            Criado por {data.site.siteMetadata.author}
          </Typography>
          <Typography variant="body2" color="inherit">
            {data.site.siteMetadata.course}
          </Typography>
        </Grid>
      </Box>
    </React.Fragment>
  )
}
export default Footer
