/* eslint-disable no-undef */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

/* intersection-observer Polyfill API for Safari/IE lazy loading support */
// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {  
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    // eslint-disable-next-line no-unused-expressions
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
} 