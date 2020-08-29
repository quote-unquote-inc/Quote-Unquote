import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
   <Layout>
      <SEO title="Services" />
      <h1 css={{ padding:"16px", }}>Programming</h1>
      <div className="programmingForm" css={{
         overflow: "hidden",
         // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
         position: "relative",
      }}>
         <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSerGLO7VLFICcEWnuKi-YBiEVS2y0cYjlSgJPT7STPx0V6JzA/viewform?embedded=true" //width="690"height="420"
            width="700"
            height="520"
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
         <form 
            name="fileUpload" 
            method="POST" 
            data-netlify="true" 
            css={{
               marginBottom: "0px",
               padding: "26px",
               paddingBottom: "13px",
               margin: "26",
            }}
         >
            <div 
               css={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexGrow: 0,
                  justifyContent: "center",
                  marginBottom: "13px",
                  "@media(max-width: 830px)": {
                     display: "contents"
                  },
               }}
            >
               <div 
                  css={{
                     flexWrap: "vertical",
                     paddingRight: "96px"
                  }}
               >
                  <p>
                     <label>Your Name: <input css={{width:"13rem"}} type="text" name="name" /></label>   
                  </p>
                  <p>
                     <label>Your Email: <input css={{width:"13rem"}} type="email" name="email" /></label>
                  </p>
               </div>
               <div 
                  css={{
                     flexWrap: "vertical",
                  }}
               >
                  <p>
                     <input css={{minWidth: "max-content"}} type="file"></input>
                  </p>
                  <p>
                     <button css={{width:"max-content"}} type="submit">Submit File Upload</button>
                  </p>
               </div>
            </div>
            
            <div>
               <p>
                  Alternative method to submit content can be found <a href="https://www.dropbox.com/request/Cy3r3JManndXUq5bBWlq">here</a>.
               </p>
            </div>
         </form>
      </div>
      <h1 css={{ padding:"16px," }}>Training</h1>
      <div className="trainingDiv" css={{ paddingBottom:"16px", fontSize:"1.3rem" }}>
         <p>For information on training, please send an email to:</p>
         <a 
            css={{
               color: "black",
               fontSize: "1.3rem",
               ":hover": {
                  color: "darkred",
               },
            }}
            href="mailto:info@quote-unquote.org"
         >
               info@quote-unquote.org
         </a>
      </div><br />
      <h1 css={{ padding:"16px," }}>Community Access Media Pod (CAMP)</h1>
      <div className="coorInfo" css={{ padding:"16px", paddingTop:0, }}>
         <h3>Site Coordinator (KQUQ-LP 102.1 FM): <i>Roger Cultee</i></h3>
         <a 
            css={{
               color: "black",
               fontSize: "1.3rem",
               ":hover": {
                  color: "darkred",
               },
            }}
            href="mailto:rcultee@rfkcharter.net"
         >
               rcultee@rfkcharter.net
         </a><br />
         <a
            css={{
               color: "black",
               fontSize: "1.3rem",
               ":hover": {
                  color: "darkred",
               },
            }}
            href="tel:+15055825054"
         >
            (505) 582-5054
         </a>
      </div><br /><br />
   </Layout>
)

export default ServicesPage
