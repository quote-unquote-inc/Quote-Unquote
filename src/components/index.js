import React from 'react'
import LazyHero from 'react-lazy-hero'
import styled from 'styled-components'

import "./index.scss"

const H1 = styled.h1`
  font-size: 3.25rem;
  color: white !important;
`

const AltParallax = () => (
   <div
      className="mainPara"
      css={{
         overflow: "hidden",
      }}
   >
      <LazyHero
         imageSrc={require("../images/abqstreet.jpeg")}
         className="paraImage paraRelaunch"
         parallaxOffset="100"
         color="lightblue"
         opacity="0.4"
         minHeight="100vh"
         css={{
            boxShadow: "0px 8px 26px",
         }}
      >
         <div
            css={{
               color: "white !important",
               width: "100vw",
               background: "rgba(0,0,0,0.4)",
            }}
         >
            <H1
               css={{
                  fontSize: "3.25rem",
                  padding: "26px",
                  color: "white",
                  "@media(max-width: 480px)": {
                     fontSize: "3rem !important",
                  },
               }}
            >
               Ya’at’eeh! Greetings! Welcome to Quote Unquote Media Center!
            </H1>
         </div>
      </LazyHero>

      <LazyHero
         imageSrc="#"
         parallaxOffset="100"
         minHeight="100vh"
         color="#282E34"
         className="paraSolid"
         css={
            {
               //boxShadow: "0px 10px 20px inset",
            }
         }
      >
         <div
            css={{
               color: "white",
               width: "80vw",
            }}
         >
            <H1
               css={{
                  fontSize: "2.6rem",
                  "@media(max-width: 480px)": {
                     fontSize: "2rem !important",
                  },
               }}
            >
               What is Quote Unquote?
            </H1>
            <p
               css={{
                  fontSize: "1.3rem",
                  lineHeight: "36px",
                  "@media(max-width: 480px)": {
                     fontSize: "1rem !important",
                  },
               }}
               /*Quote Unquote, Inc. is a nationally recognized non-profit
               multi-media broadcaster focusing on indigenous, cultural,
               educational, and social justice content. Quote Unquote has provided public
               access and local origination programs to the Albuquerque area
               since 1981. We strive to inspire open communication between the
               public through various forms of media, to help keep true
               Democracy alive.*/
            >
               

               We are a non-profit, non-commercial multi-media broadcasting company with a 40-year history of supporting community media by providing access to training, resources and outlets to air and value the diversity of voices and cultures in Central New Mexico and beyond.
            </p>
             
         </div>
      </LazyHero>

      <LazyHero
         imageSrc={require("../images/ancientart2.jpeg")}
         className="paraImage"
         parallaxOffset="100"
         minHeight="70vh"
         opacity="0.4"
         css={{
            boxShadow: "0px -8px 26px",
         }}
      >
         <div
            css={{
               width: "100vw",
               background: "rgba(0,0,0,0.4)",
               //overflow: "visible",
            }}
         >
            <H1
               css={{
                  fontSize: "3.25rem",
                  color: "white",
                  padding: "26px",
                  "@media(max-width: 480px)": {
                     fontSize: "3rem !important",
                  },
               }}
            >
               About Us
            </H1>
         </div>
      </LazyHero>
      <LazyHero
         imageSrc="#"
         className="paraSolid"
         parallaxOffset="100"
         minHeight="100vh"
         color="#282E34"
         css={{
            boxShadow: "0px 10px 26px inset",
            "@media(max-width: 480px)": {
               minHeight: "120vh !important",
            },
         }}
      >
         <div
            css={{
               color: "white !important",
               width: "90vw",
            }}
         >
            <H1
               css={{
                  fontSize: "2.6rem",
                  "@media(max-width: 480px)": {
                     fontSize: "2rem !important",
                  },
               }}
            >
               The Vision
            </H1>
            <p
               css={{
                  fontSize: "1.3rem",
                  lineHeight: "36px",
                  "@media(max-width: 480px)": {
                     fontSize: "1.1rem !important",
                  },
               }}
            >
               Our vision is to support Freedom of Speech and Democracy through
               community media. We concentrate on using media as a tool for
               education and empowerment.
            </p>
            <H1
               css={{
                  fontSize: "2.6rem",
                  "@media(max-width: 480px)": {
                     fontSize: "2rem !important",
                  },
               }}
            >
               Our Goals
            </H1>
            <p
               css={{
                  fontSize: "1.3rem",
                  lineHeight: "36px",
                  "@media(max-width: 480px)": {
                     fontSize: "1rem !important",
                  },
               }}
            >
               1. We aim to develop and promote the concept of public access to
               existing and future communications media;
               <br />
               2. Maintain and operate one or more media access centers, and;
               <br />
               3. Operate Community Cable Channel 27 and other channels in the
               future.
            </p>
         </div>
      </LazyHero>
      <LazyHero
         imageSrc={require("../images/camera.jpeg")}
         className="paraImage"
         parallaxOffset="100"
         minHeight="70vh"
         opacity="0.4"
         css={{
            boxShadow: "0px -8px 26px",
            backgroundSize: "1362px 798px",
         }}
      >
         <div
            css={{
               width: "100vw",
               background: "rgba(0,0,0,0.4)",
               //overflow: "visible",
            }}
         >
            <H1
               css={{
                  fontSize: "3.25rem",
                  color: "white",
                  padding: "26px",
                  "@media(max-width: 480px)": {
                     fontSize: "3rem !important",
                  },
               }}
            >
               Services
            </H1>
         </div>
      </LazyHero>
      <LazyHero
         imageSrc="#"
         className="paraSolid"
         parallaxOffset="100"
         minHeight="100vh"
         color="#282E34"
         css={{
            boxShadow: "0px 10px 26px inset",
            "@media(max-width: 480px)": {
               minHeight: "120vh !important",
            },
         }}
      >
         <div
            css={{
               color: "white !important",
               width: "90vw",
            }}
         >
            <H1
               css={{
                  fontSize: "2.6rem",
                  "@media(max-width: 490px)": {
                     fontSize: "2rem !important",
                  },
               }}
            >
               PRODUCTION
            </H1>
            <p
               css={{
                  fontSize: "1.3rem",
                  lineHeight: "36px",
                  "@media(max-width: 480px)": {
                     fontSize: "1rem !important",
                  },
               }}
            >
               Live & pre-recorded multi-media production and streaming services
               for events and sponsored shows.
            </p>
            <H1
               css={{
                  fontSize: "2.6rem",
                  "@media(max-width: 480px)": {
                     fontSize: "2rem !important",
                  },
               }}
            >
               TRAINING
            </H1>
            <p
               css={{
                  fontSize: "1.3rem",
                  lineHeight: "36px",
                  "@media(max-width: 480px)": {
                     fontSize: "1rem !important",
                  },
               }}
            >
               Pre-production and Tri-caster production training for k-12 and
               post-secondary educational institutions.
            </p>
            <H1
               css={{
                  fontSize: "2.6rem",
                  "@media(max-width: 480px)": {
                     fontSize: "2rem !important",
                  },
               }}
            >
               MORE
            </H1>
            <p
               className=""
               css={{
                  fontSize: "1.3rem",
                  lineHeight: "36px",
                  "@media(max-width: 480px)": {
                     fontSize: "1rem !important",
                  },
               }}
            >
               Live Community Access Media Pod (CAMP) site setup. <br />
               CAMP site community engagement- multi-media and/or mural project
               design and/or implementation.
            </p>
         </div>
      </LazyHero>
   </div>
)
export default AltParallax