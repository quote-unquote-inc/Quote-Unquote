import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Complete = () => (
   <Layout
      style={{
         display: "flex !important",
      }}
   >
      <SEO title="Donation Successful" />
      <h1>Thank you for your donation!</h1>
      <p>
         Your interest in supporting our vision, mission and programs is
         sincerely appreciated by the QUQ Board of Directors, Executive
         Director, Staff and Volunteers. Your donation will help us to support
         the community in sharing stories that are educational, cultural,
         informative and unique!
      </p>
   </Layout>
)

export default Complete
