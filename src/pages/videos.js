import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
   <Layout>
      <SEO title="Videos" />
      <div className="videosPlayer" css={{
         overflow: "hidden",
         // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
         paddingTop: "56.25%",
         position: "relative",
      }}>
         <iframe
            src="https://videoplayer.telvue.com/player/HeOirOh-Gc-q5usVq5aAFqVRqgY4amGL?fullscreen=false&showtabssearch=true&autostart=false"
            css={{
               border: 0,
               height: "100%",
               left: 0,
               position: "absolute",
               top: 0,
               width: "100%",
            }}
            frameborder="0"
            title="Videos"
            allowfullscreen
         >Loading...</iframe>
      </div>
   </Layout>
)

export default ServicesPage
