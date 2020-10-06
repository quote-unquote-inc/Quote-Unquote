import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SAGALogo = () => {
   const data = useStaticQuery(graphql`
      query {
         placeholderImage: file(relativePath: { eq: "sagaLogo.png" }) {
            childImageSharp {
               fluid(maxWidth: 3000) {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `)

   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default SAGALogo