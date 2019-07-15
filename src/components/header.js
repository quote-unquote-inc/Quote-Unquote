import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      borderBottom: `#cb1741 solid`,
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
      <div style={{  }}>
        {" "}
        <nav style={{ minWidth:'100%', margin:'0', textAlign:'center', textTransform:'uppercase', fontSize:'16px' }}>
          {" "}
          <ul style={{ display: "flex", flex: 1, margin:0 }}>
            {" "}
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{ listStyleType: `none`, padding: `0.5rem`, width:'20%'  }}
              >
                {" "}
                <Link
                  style={{ color: `black`, textDecoration: "none" }}
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
