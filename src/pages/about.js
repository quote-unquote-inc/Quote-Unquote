import React from "react"
//import { Link } from "gatsby"
//import StyledMultiBackground from "../components/multiback"
 //<StyledMultiBackground />
 
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dropdown from "../components/dropdown"
import Partners from "../components/partners"
//import "../components/about.scss"

const AboutPage = () => (
   <Layout>
      <SEO title="About Us" />
      <div className="aboutText">
         <p
            style={{
               marginBottom: "0px",
               padding: "26px",
               paddingBottom: "13px",
               fontWeight: "bold",
            }}
         >
            Quote... Unquote, Inc. is a 501c3 tax-exempt nonprofit incorporated
            in 1979. As the original founders of public access in Albuquerque,
            Quote Unquote's vision is to support freedom of speech and democracy
            through community media. Quote...Unquote, Inc. operates to provide
            the means to train people and to promote balanced community
            programming. Quote...Unquote, Inc.'s purpose is to operate Access
            Media Center(s) to enhance and facilitate communication by, for and
            among the diverse people of Albuquerque. Quote Unquote's goals are:
         </p>
         <ol>
            <li>
               To develop and promote the concept of public access to existing
               and future communications media;
            </li>
            <li>
               To maintain and operate one or more media access centers, and;
            </li>
            <li>
               To operate Community Cable Channel 27 and other channels in the
               future.
            </li>
         </ol>
      </div>
      <Dropdown />
      <h1>We are proudly partnered with:</h1>
      <Partners />
   </Layout>
)

export default AboutPage
