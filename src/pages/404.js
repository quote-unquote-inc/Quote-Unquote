import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>OH NO!</h1>
    <p>The page you are trying to reach does not exsist... You can check the URL for any typos, otherwise this page may have been removed.</p>
  </Layout>
)

export default NotFoundPage
