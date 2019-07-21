import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
import("./header.scss")

const Header = ({ siteTitle, menuLinks }) => (
  <header
    css={{
      background: `white`,
      //marginBottom: `1.45rem`,
      borderBottom: `#cb1741 solid 2.6px`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 420,
        //padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <Logo />
        </Link>
      </h1>
    </div>
    <div style={{}}>
      {" "}
      <nav
        style={{
          minWidth: "100%",
          margin: "0",
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: "16px",
        }}
      >
        {" "}
        <ul style={{ display: "flex", flex: 1, margin: 0, }}>
          {" "}
          {menuLinks.map(link => (
            <li
              className="navlis hvr-sweep-to-top"
              key={link.name}
              //style={{}}
              css={{
                listStyleType: `none`,
                padding: `0.5rem`,
                width: "20%",
                transition: `0.8s`,
                /*":hover": {
                  transform: `scale(1.05)`,
                  transition: `0.4s`,
                },*/
              }}
            >
              {" "}
              <Link
                className="navlin hvr-grow"
                style={{}}
                css={{/*
                  color: `#cb1741`,
                  textDecoration: "none",
                  transition: "1s",
                  ":hover": {
                    transform: `scale(1.3)`,
                    transition: `0.7s`,
                    color: `#cb1741`,
                    fontWeight: "bold",
                  },*/
                }}
                to={link.link}
              >
                {" "}
                {link.name}{" "}
              </Link>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
