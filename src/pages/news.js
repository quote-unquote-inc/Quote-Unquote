import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <h1>THIS WILL BE THE NEWS PAGE</h1>
    <p>Welcome to the news</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NewsPage
