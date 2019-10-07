/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../components/logo"

import Header from "./header2"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
            menuLinks {
              name
              link
            }
        }
      }
    }
  `)

  return (
     <>
        <div className="mainDiv" style={{
          minHeight: "100vh", /* will cover the 100% of viewport */
          overflow: "hidden",
          display: "block",
          position: "relative",
          paddingBottom: "129px", /* height of your footer */
        }}>
           <Header
              siteTitle={Logo}
              menuLinks={data.site.siteMetadata.menuLinks}
              style={{
                 top: 0,
                 position: `sticky`,
              }}
           />
           <div
              style={{
                 margin: `0 auto`,
                 textAlign: `center`,
                 //maxWidth: 960,
                 //padding: `0px 1.0875rem 1.45rem`,
                 paddingTop: 0,
                 marginBottom: `5px`,
              }}
           >
              <main style={{
                flexGrow: 1,
              }}>{children}</main>
           </div>
           <Footer />
        </div>
     </>
  )
}
/*
        <footer
          style={{
            bottom: 0,
            position: `relative`,
            textAlign: `center`,
            backgroundColor: "lavenderblush",
            opacity: '0.85',
            boxShadow: '0px -10px 20px white',
            marginTop: 'auto',
          }}
        >
          <p style={{opacity:'1', margin:'0', boxShadow:'0px -5px 13px' }}>© {new Date().getFullYear()}, QUOTE... UNQUOTE, INC. (QUQ) IS A 501C3
          TAX-EXEMPT NONPROFIT INCORPORATED IN 1979.</p>
        </footer> 
*/
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
//KQUQ Tab - Survey "Get involved!" - talk to roger for survey (age/ ethnicity/ zip code/ contact info)
//5 full hour production for KQUQ
//Volt stuff
