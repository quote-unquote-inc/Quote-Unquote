import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BoardMeeting = ({ data }) => {
   const { title, text, date, updatedAt } = data.contentfulBoardMeeting
   
   return (
      <Layout>
         <SEO title={title} />
         <div className="blogpost" style={{
             border: "3px black",
             marginTop: "16px",
             padding: "16px"
         }}>
            <h1>{title}</h1>
            <p style={{float:"left", margin:"auto", minWidth: "50%"}}>Posted: <b>{updatedAt}</b></p>
            <p style={{float:"right", margin: "auto", minWidth: "50%",}}>Meeting date: <b>{date}</b></p>
            <p style={{ margin: "auto", paddingTop: "60px", paddingBottom: "30px", }} className="body-text">{text.text}</p>
            <Link to="/news">Go back</Link>
         </div>
      </Layout>
   )
}

export default BoardMeeting

export const pageQuery = graphql`
   query($slug: String!) {
      contentfulBoardMeeting(slug: { eq: $slug }) {
         title
         slug
         date
         text {
            text
         }
         updatedAt
      }
   }
`
