import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>THIS WILL BE OUR SERVICES</h1>
    <p>We will sell lots of things and offer even more!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage
