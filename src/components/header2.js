/* eslint-disable no-unused-expressions */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
import("./header2.scss")

const Header = ({ siteTitle, menuLinks }) => (
   <header
      css={{
         background: `white`,
         //marginBottom: `1.45rem`,
         borderBottom: `#cb1741 solid 2.6px`,
         overflow: `hidden`,
      }}
   >
      <div
         className="logoWrapper"
         style={{
            margin: `0`,
            maxWidth: 420,
            //marginBottom: "-45px",

            //padding: `1.45rem 1.0875rem`,
         }}
      >
         <h1 className="logoLink" style={{ margin: 0, padding: "7px" }}>
            <Link
               to="/"
               aria-label="QUQ Logo"
               title="Quote Unquote Logo"
               style={{
                  color: `white`,

                  textDecoration: `none`,
                  margin: 0,
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
               maxWidth: "100%",
               margin: "0",
               textAlign: "center",
               textTransform: "uppercase",
               fontSize: "16px",
               float: "right",
            }}
         >
            {" "}
            <ul style={{ display: "flex", flex: 1, margin: 0 }}>
               {" "}
               {menuLinks.map(link => (
                  <li
                     className="navlis hvr-sweep-to-top"
                     key={link.name}
                     //style={{}}
                     css={{
                        listStyleType: `none`,
                        //padding: `0.5rem`,
                        //width: "20%",
                        width: "max-content",
                        transition: `0.8s`,
                     }}
                  >
                     {" "}
                     <Link
                        className="navlin hvr-grow"
                        style={{}}
                        css={{
                           width: "max-content",
                           padding: "13px",
                           paddingLeft: "26px",
                           paddingRight: "26px",
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
      <form
         action="https://www.paypal.com/cgi-bin/webscr"
         method="post"
         target="_top"
         style={{
            margin: "0px",
            right: 0,
            position: "absolute",
            top: 0,
            paddingRight: "13px",
            paddingTop: "7px",
         }}
      >
         <input type="hidden" name="cmd" value="_s-xclick" />
         <input type="hidden" name="hosted_button_id" value="YD87BWTAYVAAJ" />
         <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal Button"
            alt="Donate with PayPal"
         />
         <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
         />
      </form>
      <form
         action="https://connect.telvue.com/users/sign_in"
         style={{
            margin: "0px",
            right: 95,
            position: "absolute",
            top: 0,
            paddingRight: "13px",
            paddingTop: "5px",
         }}
      >
         <button
            type="submit"
            css={{
               fontSize: "13px",
               fontWeight: "bold",
               width: "max-content",
               borderRadius: "16px",
               borderWidth: "1px",
               borderColor: "rgb(203, 23, 65)",
               height: "25px",
               lineHeight: "25px",
               cursor: "pointer",
               background: "rgba(203, 23, 65,0.4)",
               color: "black",
               ":active": {
                  backgroundColor: "#BE0405",
                  color: "white",
               },
            }}
         >
            Producer Login
         </button>
      </form>
   </header>
)

Header.propTypes = {
   siteTitle: PropTypes.string,
}

Header.defaultProps = {
   siteTitle: ``,
}

export default Header
