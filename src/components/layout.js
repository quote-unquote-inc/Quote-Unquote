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

import Header from "./header"
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
      <Header siteTitle={Logo} menuLinks={data.site.siteMetadata.menuLinks} style={{
        top: 0,
        position: `sticky`,
      }} />
      <div
        style={{
          margin: `0 auto`,
          textAlign: `center`,
          //maxWidth: 960,
          //padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            bottom: 0,
            position: `relative`,
            textAlign: `center`,
          }}
        >
          © {new Date().getFullYear()}, QUOTE... UNQUOTE, INC. (QUQ) IS A 501C3
          TAX-EXEMPT NONPROFIT INCORPORATED IN 1979.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
