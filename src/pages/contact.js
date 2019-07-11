import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>THIS IS WHERE ALL OF THE CONTACT INFO WILL GO</h1>
    <p>You can reach us at email@domain.net</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
