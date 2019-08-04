import React from "react"
//import { Link } from "gatsby"
import LazyHero from 'react-lazy-hero'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
//import Contact from "../components/contactTile"  

const H1 = styled.h1`
  font-size: 3.25rem;
  color: black !important;
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <LazyHero
      imageSrc="https://code2prog.com/wp-content/uploads/2015/01/ceystalhorizon-flat-design-wallpapers-HD-free-wallpapers-backgrounds-images-FHD-4k-download-2014-2015-2016-1024x576.jpg"
      parallaxOffset="100"
      minHeight="130vh"
      //color="lavenderblush"
      className="paraSolid"
      css={{
        boxShadow: "0px 10px 26px inset",
      }}
    >
      <div
        css={{
          color: "black",
          //width: "80vw",
        }}
      >
        <H1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          Contact us directly:
        </H1>
        <p
          css={{
            fontSize: "1.5rem",
            lineHeight: "36px",
            "@media(max-width: 480px)": {
              fontSize: "1.3rem",
            },
          }}
        >
          Call us @{" "}
          <a
            css={{
              color: "black",
              ":hover": {
                color: "#cb1741",
              },
            }}
            href="tel:+15055017700"
          >
            (505) 501-7700
          </a>
          <br />
          Reach us by mail @ PO Box 26206, Albuquerque, NM 87107
          <br />
          Or come see us @{" "}
          <a
            css={{
              color: "black",
              ":hover": {
                color: "#cb1741",
              },
            }}
            href="http://maps.google.com/?q=5005 4th St. NW Ste. 102, Albuquerque NM 87107"
            target="_blank"
            rel="noopener noreferrer"
          >
            5005 4th St. NW Ste. 102, Albuquerque NM 87107
          </a>
        </p>
        <H1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          Or send us a message:
        </H1>
      </div>

      <div className="form">
        <form
          method="post"
          action="#"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          css={{
            textAlign: "center",
            margin: "0",
          }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <input
            type="text"
            name="name"
            id="name"
            aria-label="Full Name"
            placeholder="Full Name"
            css={{
              textAlign: "center",
              width: "70vw",
              margin: "13px 13%",
              background: "transparent",
              color: "black",
              borderStyle: "groove",
              borderColor: "#cb1741",
              borderLeft: "0px",
              borderRight: "0px",
              borderTop: "0px",
              borderRadius: "9px",
            }}
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            aria-label="Email"
            placeholder="email@domain.com"
            css={{
              textAlign: "center",
              width: "70vw",
              margin: "13px 13%",
              background: "transparent",
              color: "black",
              borderStyle: "groove",
              borderColor: "#cb1741",
              borderLeft: "0px",
              borderRight: "0px",
              borderTop: "0px",
              borderRadius: "9px",
            }}
            required
          />
          <input
            type="text"
            name="phone"
            id="phone"
            aria-label="Phone Number"
            placeholder="Phone (### ### ####)"
            css={{
              textAlign: "center",
              width: "70vw",
              margin: "13px 13%",
              background: "transparent",
              color: "black",
              borderStyle: "groove",
              borderColor: "#cb1741",
              borderLeft: "0px",
              borderRight: "0px",
              borderTop: "0px",
              borderRadius: "9px",
            }}
          />
          <textarea
            name="message"
            id="message"
            rows="4"
            aria-label="Message"
            placeholder="Type Your Message Here"
            required
            css={{
              textAlign: "center",
              width: "70vw",
              margin: "13px 13%",
              background: "transparent",
              color: "black",
              borderStyle: "groove",
              borderColor: "#cb1741",
              borderRadius: "9px",
            }}
          />
          <input
            type="submit"
            value="Send Message"
            css={{
              margin: "0 20%",
              borderRadius: "13px",
              background: "transparent",
              color: "black",
              ":active": {
                backgroundColor: "#BE0405",
              },
            }}
          />
        </form>
      </div>
    </LazyHero>
  </Layout>
)

export default ContactPage
