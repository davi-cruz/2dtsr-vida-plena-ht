import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = (props: { className: string }) => (
  <StaticQuery
    query={graphql`
      {
        file(name: { eq: "logo" }, extension: { eq: "png" }) {
          name
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          fluid={data.file.childImageSharp.fluid}
          className={props.className}
        />
      )
    }}
  />
)

export default Logo
