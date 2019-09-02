import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const News = ({ data }) => {
   const boardMeeting = data.allContentfulBoardMeeting.edges
   return (
      <Layout>
         <SEO title="News" />
         <div className="boardMeetings" style={{
             padding: "13px",
             marginTop: "13px",
         }}>
         <h1>{"Upcoming Board Meetings"}</h1>
         
            {boardMeeting.map(({ node: post }) => (
               <div key={post.id} css={{
                   fontSize: "23px",
                   width: "max-content",
                   transition: ".5s",
                   margin: "auto",
                   ":hover":{
                       transform: "scale(1.3)",
                       transition: ".7s"
                   }
               }}>
                  <Link css={{color: "black", transition: ".5s", ":hover":{color: "red", transition:".7s", transform: "scale(1.3)"}}} to={`/news/${post.slug}`}>{post.title}</Link>
               </div>
            ))}
            <span className="mgBtm__24" />
         </div>
      </Layout>
   )
}

export default News

export const query = graphql`
   query BoardMeetingPageQuery {
      allContentfulBoardMeeting(limit: 1000) {
         edges {
            node {
               id
               title
               slug
               text {
                  text
               }
            }
         }
      }
   }
`
