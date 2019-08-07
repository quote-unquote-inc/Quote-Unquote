import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import "./construction.scss"

const MultiBackground = ({ children, className }) => {
  const {
    astronaut,
    seamlessBackground,
  } = useStaticQuery(
    graphql`
      query {
        astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 30) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        seamlessBackground: file(
          relativePath: { eq: "ancientart.jpeg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2420) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    seamlessBackground.childImageSharp.fluid,
    `radial-gradient(rgba(4, 243, 67, 0.73), rgba(220, 15, 15, 0.73))`,
    astronaut.childImageSharp.fluid,
  ].reverse()

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <StyledInnerWrapper>
        <UnderConstruction
          background={{
            image: '#',
            textColor: '#fff',
            overlay: {
              color: '#000',
              opacity: '.5'
            }
    }}
    logo={{
      src: 'https://i.ibb.co/8b79pCD/QUQupd.png',
      alt: 'QUQ Logo'
    }}
    description={{
      text: 'Our website is under construction. We are hard at work to bring you more content, so check back soon!',
      css: {
        maxWidth: '640px',
      }
    }}
    links={[
      {
        url: 'https://www.facebook.com/SoundingTheTruth',
        image: 'https://image.flaticon.com/icons/svg/220/220200.svg',
      },
      {
        url: 'mailto:info@quote-unquote.org',
        image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
      },
    ]}
  />
      </StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledInnerWrapper = styled.div`
  margin-top: 7%;
  display: flex;  
  flex-direction: column; 
  align-items: center;
`

const Construct = styled(MultiBackground)`
  width: 100%;
  max-height: 91.6vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: auto, auto, cover;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center 155%, center, center;
  color: #fff;
`

export default Construct