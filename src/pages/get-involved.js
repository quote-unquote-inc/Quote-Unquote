/* eslint-disable no-dupe-keys */
import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GRRLogo from "../components/GRRLogo"
import AHCCLogo from "../components/ahccLogo"
import RIPLogo from "../components/ripLogo"
import PVLogo from "../components/svLogo"
import SWOPLogo from "../components/swopLogo"
import RFKLogo from "../components/RFKLogo"
import SAGALogo from "../components/sagaLogo"


const GetInvolved = () => (
   <Layout>
      <SEO title="Get Involved!" />
      <h1 style={{ padding:"16px" }}>Quote Unquote is proudly partnered with:</h1>
      <div
         css={{
            //margin: `13px`,
            //marginBottom: `26px`,
            padding: '26px',
            paddingTop: 0,
            display: `-webkit-flex; /_ Safari _/`,
            display: `flex`,
            flexDirection: `row`,
            webkitFlexWrap: `wrap; /_ Safari _/`,
            flexWrap: `wrap`,
            alignItems: `center`,
            justifyContent: `space-around`,
         }}
      >
         <div
            css={{
               //margin: `0 auto`,
               padding: `13px`,
               //maxWidth: 240,
               flexGrow: 1,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  width: "40vw",
               },
               "@media(min-width: 400px)": {
                  width: "40vw",
               },
               "@media(min-width: 760px)": {
                  maxWidth: "30vw",
               },
            }}
         >
            <a
               href="http://www.rfkcharter.net"
               aria-label="RFK Charter Logo"
               title="RFK Charter"
               target="_blank"
               rel="noopener noreferrer"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <RFKLogo />
            </a>
         </div>
         <div
            css={{
               //margin: `0 auto`,
               flexGrow: 1,
               padding: `13px`,
               //maxWidth: 360,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  width: "40vw",
               },
               "@media(min-width: 400px)": {
                  width: "40vw",
               },
               "@media(min-width: 760px)": {
                  maxWidth: "30vw",
               },
            }}
         >
            <a
               href="https://www.goodrichroofing.com/"
               aria-label="Goodrich Roofing Logo"
               title="Goodrich Roofing"
               rel="noopener noreferrer"
               target="_blank"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <GRRLogo />
            </a>
         </div>
         <div
            css={{
               //margin: `0 auto`,
               flexGrow: 1,
               padding: `13px`,
               //maxWidth: 240,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  width: "40vw",
               },
               "@media(min-width: 400px)": {
                  width: "30vw",
               },
               "@media(min-width: 760px)": {
                  maxWidth: "20vw",
               },
            }}
         >
            <a
               href="https://www.ahcnm.org/"
               aria-label="Albuquerque Hispano Chamber of Congress Logo"
               title="Albuquerque Hispano Chamber of Congress"
               rel="noopener noreferrer"
               target="_blank"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <AHCCLogo />
            </a>
         </div>
         <div
            css={{
               //margin: `0 auto`,
               flexGrow: 1,
               padding: `13px`,
               //maxWidth: 200,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  width: "40vw",
               },
               "@media(min-width: 400px)": {
                  width: "30vw",
               },
               "@media(min-width: 760px)": {
                  maxWidth: "30vw",
               },
               "@media(min-width: 1020px)": {
                  maxWidth: "20vw",
               },
            }}
         >
            <a
               href="https://reelindianpictures.com/"
               aria-label="Reel Indian Pictures Logo"
               title="Reel Indian Pictures"
               rel="noopener noreferrer"
               target="_blank"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <RIPLogo />
            </a>
         </div>
         <div
            css={{
               //margin: `0 auto`,
               padding: `13px`,
               //maxWidth: 240,
               flexGrow: 1,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  width: "40vw",
               },
               "@media(min-width: 400px)": {
                  width: "40vw",
               },
               "@media(min-width: 760px)": {
                  maxWidth: "30vw",
               },
               "@media(min-width: 1020px)": {
                  maxWidth: "20vw",
               },
            }}
         >
            <a
               href="http://www.proviewnetworks.com/"
               aria-label="ProView Networks Logo"
               title="ProView Networks"
               target="_blank"
               rel="noopener noreferrer"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <PVLogo />
            </a>
         </div>
         <div
            css={{
               //margin: `0 auto`,
               padding: `13px`,
               maxWidth: 240,
               flexGrow: 1,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  width: "40vw",
               },
               "@media(min-width: 400px)": {
                  width: "40vw",
               },
               "@media(min-width: 760px)": {
                  maxWidth: "30vw",
               },
               "@media(min-width: 1020px)": {
                  maxWidth: "20vw",
               },
            }}
         >
            <a
               href="https://www.swop.net/"
               aria-label="SouthWest Organizing Project Logo"
               title="SouthWest Organizing Project"
               target="_blank"
               rel="noopener noreferrer"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <SWOPLogo />
            </a>
         </div>
         <div
            css={{
               //margin: `0 auto`,
               padding: `13px`,
               //maxWidth: 240,
               flexGrow: 1,
               //padding: `1.45rem 1.0875rem`,
               "@media(min-width: 220px)": {
                  width: "40vw",
               },
               "@media(min-width: 400px)": {
                  width: "40vw",
               },
               "@media(min-width: 760px)": {
                  maxWidth: "30vw",
               },
            }}
         >
            <a
               href="http://www.sagagymnastics.com/index.html"
               aria-label="Saga Gymnastics Logo"
               title="SAGA Gymnastics"
               target="_blank"
               rel="noopener noreferrer"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}
            >
               <SAGALogo />
            </a>
         </div>
      </div>
      
   </Layout>
)

export default GetInvolved
