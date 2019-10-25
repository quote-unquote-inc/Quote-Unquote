import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RFKLogo from "../components/RFKLogo"
import GRRLogo from "../components/GRRLogo"

const PartnersPage = () => (
   <Layout>
      <SEO title="Partners" />
      <h1>Quote Unquote is proudly partnered with:</h1>
      <div
         style={{
            margin: `13px`,
            marginBottom: `26px`,
         }}
      >
         <div
            style={{
               margin: `0 auto`,
               padding: `13px`,
               maxWidth: 300,
               //padding: `1.45rem 1.0875rem`,
            }}
         >
            <a
               href="http://www.rfkcharter.net"
               aria-label="RFK Logo"
               title="RFK Logo"
               target="_blank"
               rel="noopener noreferrer"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <RFKLogo />
            </a>
         </div>
         <div
            style={{
               margin: `0 auto`,
               width: `80%`,
               padding: `13px`,
               maxWidth: 340,
               //padding: `1.45rem 1.0875rem`,
            }}
         >
            <a
               href="https://www.goodrichroofing.com/"
               aria-label="Goodrich Roofing Logo"
               title="Goodrich Roofing Logo"
               rel="noopener noreferrer"
               target="_blank"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <GRRLogo />
            </a>
         </div>
      </div>
   </Layout>
)

export default PartnersPage
