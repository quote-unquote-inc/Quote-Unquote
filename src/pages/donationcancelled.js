import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Complete = () => (
   <Layout style={{
       display: "flex !important",
   }}>
      <SEO title="Donation Cancelled" />
      <h1>OH NO!</h1>
      <p>
         Your donation has been cancelled. If you feel you have errored in
         cancelling this, please restart the process by clicking the donate
         button again. Your support in any amount is sincerely appreciated.
         Thank you for your time and interest in making an effort to support
         Quote Unquote, Inc.
      </p>
   </Layout>
)

export default Complete
