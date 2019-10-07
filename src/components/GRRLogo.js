import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GRRLogo = () => {
   const data = useStaticQuery(graphql`
      query {
         placeholderImage: file(
            relativePath: { eq: "goodrich-roofing-logo.png" }
         ) {
            childImageSharp {
               fluid(maxWidth: 7000) {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `)

   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default GRRLogo
