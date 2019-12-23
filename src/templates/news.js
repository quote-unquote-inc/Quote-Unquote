/* eslint-disable react/prop-types */
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const News = ({ data }) => {
   const { title, body, date } = data.contentfulNews

   return (
      <Layout>
         <SEO title={title} />
         <div
            className="blogpost"
            style={{
               border: "3px black",
               marginTop: "16px",
               padding: "16px",
            }}
         >
            <h1>{title}</h1>
            <p style={{ margin: "auto", minWidth: "50%" }}>
               <b>{date}</b>
            </p>
            <p
               style={{
                  margin: "auto",
                  paddingTop: "60px",
                  paddingBottom: "30px",
               }}
               className="body-text"
            >
               {body.body}
            </p>
            <Link to="/news">&larr; Go back</Link>
         </div>
      </Layout>
   )
}

export default News

export const pageQuery = graphql`
   query($slug: String!) {
      contentfulNews(slug: { eq: $slug }) {
         title
         slug
         date
         body {
            body
         }
      }
   }
`
