import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const NewsPosts = ({ data }) => {
   const newsPosts = data.allContentfulNewsPost.edges
   return (
      <Layout>
         <SEO title="Blog posts" />
         <h1>{"Here's a list of all news posts!"}</h1>
         <div className="newsposts">
            {newsPosts.map(({ node: post }) => (
               <div key={post.id}>
                  <Link to={`/newspost/${post.slug}`}>{post.title}</Link>
               </div>
            ))}
            <span className="mgBtm__24" />
            <Link to="/">Go back to the homepage</Link>
         </div>
      </Layout>
   )
}
export default NewsPosts
export const query = graphql`
   query NewsPostsPageQuery {
      allContentfulNewsPost(limit: 1000) {
         edges {
            node {
               id
               title
               slug
               body {
                  body
               }
               image {
                  file {
                     url
                  }
               }
               tags
            }
         }
      }
   }
`
