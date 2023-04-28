import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import AccessTime from "@material-ui/icons/AccessTime"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Bar from "./bar"

const AppsPanel = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Typography variant="h4" color="inherit">
          Baixe nosso app
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          Em breve nosso app estará disponível nas principais lojas de aplicativos
          para Android e iOS
        </Typography>


        <Button
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<AccessTime />}
        >
          Me avise quando estiver disponível
        </Button>
      </Grid>

      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
            <Image
              alt="Virtual Healthcare for you"
              filename="apps-panel-image.png"
            />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default AppsPanel
