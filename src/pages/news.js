import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const News = ({ data }) => {
   const boardMeeting = data.allContentfulBoardMeeting.edges
   const news = data.allContentfulNews.edges
   return (
      <Layout>
         <SEO title="News" />
         <div
            className="newpageConatiner"
            css={{
               display: "flex",
               flexGrow: 0,
               justifyContent: "space-evenly",
               marginBottom: "13px",
               "@media(max-width: 830px)": {
                  display: "contents"

               },
            }}
         >
            <div
               className="news"
               style={{
                  padding: "13px",
                  marginTop: "13px",
                  order: 1,
                  minWidth: "40%"

               }}
            >
               <h1>{"News"}</h1>
               {news.map(({ node: post }) => (
                  <div
                     key={post.id}
                     css={{
                        fontSize: "23px",
                        width: "max-content",
                        transition: ".5s",
                        paddingTop: "1%",
                        margin: "auto",
                        ":hover": {
                           transform: "scale(1.1)",
                           transition: ".7s",
                        },
                     }}
                  >
                     <Link
                        css={{
                           color: "black",
                           transition: ".5s",
                           ":hover": {
                              color: "red",
                              transition: ".7s",
                              transform: "scale(1.3)",
                           },
                        }}
                        to={`/news/${post.slug}`}
                     >
                        {post.title}
                     </Link>
                  </div>
               ))}
               <span className="mgBtm__24" />
            </div>
            <div
               className="boardMeetings"
               style={{
                  padding: "13px",
                  marginTop: "13px",
                  order: 2,
                  minWidth: "40%",
               }}
            >
               <h1>{"Upcoming Board Meetings"}</h1>
               {boardMeeting.map(({ node: post }) => (
                  <div
                     key={post.id}
                     css={{
                        fontSize: "23px",
                        width: "max-content",
                        transition: ".5s",
                        paddingTop: "1%",
                        margin: "auto",
                        ":hover": {
                           transform: "scale(1.1)",
                           transition: ".7s",
                        },
                     }}
                  >
                     <Link
                        css={{
                           color: "black",
                           transition: ".5s",
                           ":hover": {
                              color: "red",
                              transition: ".7s",
                              transform: "scale(1.3)",
                           },
                        }}
                        to={`/news/${post.slug}`}
                     >
                        {post.title}
                     </Link>
                  </div>
               ))}
               <span className="mgBtm__24" />
               </div>
            </div>
      </Layout>
   )
}

export default News

export const query = graphql`
          query NewsPageQuery {
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
             allContentfulNews {
                edges {
                   node {
                      id
                      title
                      slug
                      body {
                         body
                      }
                   }
                }
             }
          }
       `
