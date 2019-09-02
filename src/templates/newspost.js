import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const NewsPost = ({ data }) => {
   const { title, body, image, tags } = data.contentfulNewsPost
   return (
      <Layout>
         <SEO title={title} />
         <div className="newsspost">
            <h1>{title}</h1>
            <img alt={title} src={image.file.url} />
            <div className="tags">
               {tags.map(tag => (
                  <span className="tag" key={tag} style={{visibility: "hidden"}}>
                     {tag}
                  </span>
               ))}
            </div>
            <p className="body-text">{body.body}</p>
            <Link to="/newspost">View more posts</Link>
            <Link to="/">Back to Home</Link>
         </div>
      </Layout>
   )
}
export default NewsPost
export const pageQuery = graphql`
   query($slug: String!) {
      contentfulNewsPost(slug: { eq: $slug }) {
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
`
