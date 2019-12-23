/* eslint-disable no-dupe-keys */
import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RFKLogo from "../components/RFKLogo"
import GRRLogo from "../components/GRRLogo"
import AHCCLogo from "../components/ahccLogo"
import RIPLogo from "../components/ripLogo"

const PartnersPage = () => (
   <Layout>
      <SEO title="Partners" />
      <h1>Quote Unquote is proudly partnered with:</h1>
      <div
         css={{
            //margin: `13px`,
            //marginBottom: `26px`,
            display: `-webkit-flex; /_ Safari _/`,
            display: `flex`,
            flexDirection: `row`,
            webkitFlexWrap: `wrap; /_ Safari _/`,
            flexWrap: `wrap`,
            alignItems: `center`,
            justifyContent: `space-around`,
         }}
      >
         <div
            css={{
               //margin: `0 auto`,
               padding: `13px`,
               maxWidth: 240,
               flexGrow: 1,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  minWidth: 280,
               },
               "@media(min-width: 800px)": {
                  minWidth: 380,
               },
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
            css={{
               //margin: `0 auto`,
               flexGrow: 2,
               padding: `13px`,
               maxWidth: 360,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  minWidth: 320,
               },
               "@media(min-width: 800px)": {
                  minWidth: 380,
               },
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
         <div
            css={{
               //margin: `0 auto`,
               flexGrow: 1,
               padding: `13px`,
               maxWidth: 240,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  minWidth: 140,
               },
               "@media(min-width: 800px)": {
                  minWidth: 280,
               },
            }}
         >
            <a
               href="https://www.ahcnm.org/"
               aria-label="Albuquerque Hispano Chamber of Congress Logo"
               title="Albuquerque Hispano Chamber of Congress Logo"
               rel="noopener noreferrer"
               target="_blank"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <AHCCLogo />
            </a>
         </div>
         <div
            css={{
               //margin: `0 auto`,
               flexGrow: 1,
               padding: `13px`,
               maxWidth: 200,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  minWidth: 70,
               },
               "@media(min-width: 800px)": {
                  minWidth: 280,
               },
            }}
         >
            <a
               href="https://reelindianpictures.com/"
               aria-label="Reel Indian Pictures Logo"
               title="Reel Indian Pictures Logo"
               rel="noopener noreferrer"
               target="_blank"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <RIPLogo />
            </a>
         </div>
      </div>
   </Layout>
)

export default PartnersPage
