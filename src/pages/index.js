import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
//import IndexParallax from "../components/parallax"
//import StyledMultiBackground from "../components/multiback"
import AltParallax from "../components/index"
//import MyComponent from "../components/index2"


import "../components/parallax.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AltParallax />
  </Layout>
)

export default IndexPage
