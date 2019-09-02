import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const News = ({ data }) => {
   const boardMeeting = data.allContentfulBoardMeeting.edges
   return (
      <Layout>
         <SEO title="News" />
         <h1>{"Upcoming Board Meetings"}</h1>
         <div className="boardMeetings">
            {boardMeeting.map(({ node: post }) => (
               <div key={post.id}>
                  <Link to={`/news/${post.slug}`}>{post.title}</Link>
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
