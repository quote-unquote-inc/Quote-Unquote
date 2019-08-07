import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
   <Layout>
      <SEO title="Services" />
      <h1>Programming</h1>
      <iframe
         src="https://docs.google.com/forms/d/e/1FAIpQLSe5Zv4uBOEwSPY3QAhGd0gI-vyZd7bFhICbIV_73G_T3bYk-w/viewform?embedded=true"
         width="690"
         height="400"
         frameborder="0"
         title="Program Submission Form"
         className="ProgrammingForm"
         marginheight="0"
         marginwidth="0"
         css={{
           border: "none",
            "@media(max-width: 480px)": {
               width: "300px !important",
            },
         }}
      >
         Loading…
      </iframe>
   </Layout>
)

export default ServicesPage
