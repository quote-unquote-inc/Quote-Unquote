import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
   <Layout>
      <SEO title="Services" />
      <h1>Programming</h1>
      <div className="programmingForm" css={{
         overflow: "hidden",
         // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
         position: "relative",
      }}>
         <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe5Zv4uBOEwSPY3QAhGd0gI-vyZd7bFhICbIV_73G_T3bYk-w/viewform?embedded=true"
            width="690"
            height="420"
            frameBorder="0"
            title="Program Submission Form"
            className="ProgrammingForm"
            marginHeight="0"
            marginWidth="0"
            css={{
               border: "none",
               maxWidth: "none",
               "@media(max-width: 480px)": {
                  width: "300px !important",
               },
            }}
         >
            Loading…
         </iframe>
      </div>
   </Layout>
)

export default ServicesPage
