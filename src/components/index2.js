import React from "react"
import { Parallax } from "react-parallax"
import { left } from "glamor";

const MyComponent = () => (
   <div style={{ marginLeft: "-1px", }}>
      {/* -----basic config-----*/}
      <Parallax
         blur={{ min: -15, max: 15 }}
         bgImage={require("../images/ancientart.jpeg")}
         bgImageAlt="the cat"
         strength={-100}
      >
         <div style={{ height: "100vh" }}>
            content
         </div>
      </Parallax>

      {/* -----dynamic blur-----*/}
      <Parallax
         blur={{ min: -20, max: 15 }}
         bgImage={require("../images/snowset.jpeg")}
         bgImageAlt="the dog"
         strength={400}
      >
         
         <div style={{ height: "100vh" }}>
            Blur transition from min to max
         </div>
      </Parallax>
   </div>
)
export default MyComponent
