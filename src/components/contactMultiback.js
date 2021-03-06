import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const H1 = styled.h1`
   font-size: 3.25rem;
   color: white !important;
`

const MultiBackground = ({ children, className }) => {
   const { astronaut, seamlessBackground } = useStaticQuery(
      graphql`
         query {
            astronaut: file(relativePath: { eq: "QUQupd.png" }) {
               childImageSharp {
                  fluid(quality: 100, maxWidth: 5) {
                     ...GatsbyImageSharpFluid_withWebp
                  }
               }
            }
            seamlessBackground: file(relativePath: { eq: "crystalMountain.jpeg" }) {
               childImageSharp {
                  fluid(quality: 100, maxWidth: 2420) {
                     ...GatsbyImageSharpFluid_withWebp
                  }
               }
            }
         }
      `
   )

   // Watch out for CSS's stacking order, especially when styling the individual
   // positions! The lowermost image comes last!
   const backgroundFluidImageStack = [
      seamlessBackground.childImageSharp.fluid,
      astronaut.childImageSharp.fluid,
      `linear-gradient(rgba(173, 216, 230, 0.73), rgba(4, 243, 67, 0.53))`,
   ].reverse()

   return (
      <BackgroundImage
         Tag={`section`}
         id={`test`}
         className={className}
         fluid={backgroundFluidImageStack}
      >
         <StyledInnerWrapper>
            <div
               css={{
                  color: "white",
                  width: "80vw",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "26px",
                  borderRadius: "13px",
                  "@media(max-width: 480px)": {
                     width: "90vw",
                  },
               }}
            >
               <div css={{}}>
                  <H1
                     css={{
                        fontSize: "3.5rem",
                        "@media(max-width: 480px)": {
                           fontSize: "3.25rem",
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
                     <H1
                        css={{
                           fontSize: "2.6rem",
                           margin: "13px",
                           "@media(max-width: 480px)": {
                              fontSize: "2rem",
                           },
                        }}
                     >
                        Mailing Address
                     </H1>
                     PO Box 26206, Albuquerque, NM 87125
                     <br />
                     <H1
                        css={{
                           fontSize: "2.6rem",
                           margin: "13px",
                           "@media(max-width: 480px)": {
                              fontSize: "2rem",
                           },
                        }}
                     >
                        Administration Office
                     </H1>
                     <a
                        css={{
                           color: "white",
                           ":hover": {
                              color: "darkred",
                           },
                        }}
                        href="http://maps.google.com/?q=211 10th Street SW, Albuquerque NM 87125"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        211 10th Street SW, Quote Unquote Inc. SWOP office, Albuquerque, NM 87125
                     </a>
                     <br />
                     <a
                        css={{
                           color: "white",
                           ":hover": {
                              color: "darkred",
                           },
                        }}
                        href="tel:+15055017700"
                     >
                        (505) 501-7700
                     </a>
                     <H1
                        css={{
                           fontSize: "2.6rem",
                           margin: "13px",
                           "@media(max-width: 480px)": {
                              fontSize: "2rem",
                           },
                        }}
                     >
                        RFK Charter School KQUQ CAMP Site 1
                     </H1>
                     <a
                        css={{
                           color: "white",
                           ":hover": {
                              color: "darkred",
                           },
                        }}
                        href="http://maps.google.com/?q=4300 Blake Rd. SW, Albuquerque NM 87121"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        4300 Blake Rd. SW, Albuquerque NM 87121
                     </a>
                     <br />
                     <a
                        css={{
                           color: "white",
                           ":hover": {
                              color: "darkred",
                           },
                        }}
                        href="tel:+15052431118"
                     >
                        (505) 243-1118
                     </a>
                     <H1
                        css={{
                           fontSize: "2.3rem",
                           margin: "13px",
                           fontWeight: "bold",
                           "@media(max-width: 480px)": {
                              fontSize: "1.7rem",
                           },
                        }}
                     >
                        CAMP Site Coordinator - Roger Cultee
                     </H1>
                     <a
                        css={{
                           color: "white",
                           ":hover": {
                              color: "darkred",
                           },
                        }}
                        href="tel:+15055825054"
                     >
                        (505) 582-5054
                     </a>
                  </p>
                  <H1
                     css={{
                        fontSize: "3.5rem",
                        "@media(max-width: 480px)": {
                           fontSize: "3.25rem",
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
                           margin: "13px",
                           background: "transparent",
                           color: "white",
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
                           margin: "13px",
                           background: "transparent",
                           color: "white",
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
                           margin: "13px",
                           background: "transparent",
                           color: "white",
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
                           margin: "13px",
                           background: "transparent",
                           color: "white",
                           borderStyle: "groove",
                           borderColor: "#cb1741",
                           borderRadius: "9px",
                        }}
                     />
                     <input
                        type="submit"
                        value="Submit"
                        css={{
                           margin: "0 20%",
                           borderRadius: "13px",
                           background: "rgba(0, 0, 0, 0.4)",
                           color: "white",
                           cursor: "pointer",
                           ":active": {
                              backgroundColor: "#BE0405",
                           },
                        }}
                     />
                  </form>
               </div>
            </div>
         </StyledInnerWrapper>
      </BackgroundImage>
   )
}

const StyledInnerWrapper = styled.div`
   padding-top: 3%;
   padding-bottom: 3%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const ContactBack = styled(MultiBackground)`
   width: 100%;
   min-height: 100vh;
   /* You should set a background-size as the default value is "cover"! */
   background-size: auto, auto, cover;
   /* So we won't have the default "lightgray" background-color. */
   background-color: transparent;
   /* Now again, remember the stacking order of CSS: lowermost comes last! */
   background-repeat: no-repeat, no-repeat, no-repeat;
   background-position: center 155%, center, center;
   color: #fff;
`

export default ContactBack
