import React from "react"
import { Link } from "gatsby"
//import StyledMultiBackground from "../components/multiback"
 //<StyledMultiBackground />
 
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
   
    <h1>THIS WILL BE WHERE YOU SEE WHO WE ARE</h1>
    <p>Hint, we're pretty amazing.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
