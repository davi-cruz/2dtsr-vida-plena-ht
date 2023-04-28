import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"
import Image from "./image"

const Footer = () => {
  const footerLinks = [
    {
      title: "Empresa",
      items: [
        { displayText: "Sobre", url: "" },
        {
          displayText: "Depoimentos",
          url: "",
        },
        { displayText: "Apps", url: "" },
      ],
    },
    {
      title: "Ajuda",
      items: [
        { displayText: "Como funciona", url: "" },
        { displayText: "Instruções", url: "" },
        { displayText: "Contatar suporte", url: "" },
        
      ],
    },
  ]

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
              Vida Plena HealthTech
            </Typography>
            <Image
              alt="Vida Plena HealthTech Logo"
              filename="LogoSmall.png"
            />
            <Typography variant="body2" color="inherit">
              Todo cuidado que você precisa na palma da sua mão
            </Typography>
            <Typography variant="body2" color="inherit">
              ©Vida Plena HealthTech 2023. Todos os direitos reservados
            </Typography>
          </Grid>

          <Hidden xsDown>
            {footerLinks.map(footerMenu => (
              <Grid
                item
                xs={12}
                sm={2}
                container
                direction="column"
                justify="space-evenly"
                key={footerMenu.title}
              >
                <Typography variant="subtitle1" color="inherit">
                  {footerMenu.title}
                </Typography>
                {footerMenu.items.map(link => (
                  <Link color="inherit" variant="body2" key={link.displayText}>
                    {link.displayText}
                  </Link>
                ))}
              </Grid>
            ))}
          </Hidden>
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
            Criado por Davi Cruz e Marcus Orsolin
          </Typography>
          <Typography variant="body2" color="inherit">
            FIAP 2DTSR
          </Typography>
        </Grid>        
      </Box>
    </React.Fragment>
  )
}
export default Footer
