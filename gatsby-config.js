module.exports = {
  siteMetadata: {
    title: `Vida Plena Health Tech`,
    description: `Todo cuidado que você precisa na palma da sua mão`,
    author: `Davi Cruz e Marcos Orsolin`,
    course: `FIAP - MBA em Data Science`,
    logo: `logo.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vida Plena Health Tech`,
        short_name: `VidaPlenaHT`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-material-ui`,
  ],
}
