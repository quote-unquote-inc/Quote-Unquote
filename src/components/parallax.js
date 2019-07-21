import React from "react"
import { Parallax, Background } from "react-parallax"
import StyledMultiBackground from "./multiback"

const IndexParallax = () => (
  <div
    className="parallaxMainDiv"
    style={{
      //height: "200px",
      fontColor: "white",
    }}
  >
    {/* -----basic config-----*/}
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require("../images/snowset.jpeg")}
      bgImageAlt="New Mexico Sunset"
      strength={500}
      className="topPara para"
      css={{
        height: "100vh",
      }}
    >
      <div
        className="paraText"
        style={
          {
            /*height: "min-content",
          width: "100%",
          color: "white",
          position: "absolute",
          margin: "auto",
          padding: "13px",
          fontSize: "3rem",
          //lineHeight: "90vh",
          background: "rgba(0, 0, 0, 0.4)",*/
            //top: '80vh',
          }
        }
      >
        Quote Unquote, Inc. is Relaunching Operations!
      </div>
    </Parallax>
    <Parallax
      bgImage={"../images/ancientart.jpg"}
      strength={0}
      className="para"
      style={{
        height: "100vh",
        backgroundImage: "url('../images/snowset.jpeg')",
      }}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            background: `linear-gradient(rgba(220, 15, 15, ${percentage * 3}), rgba(4, 243, 67, ${percentage * 6}))`,
            backgroundImage: ``,
            right: "0%",
            top: "0",
            width: percentage * 90000,
            height: percentage * 2550,
          }}
        />
      )}
    ><StyledMultiBackground />
      
      <div
        className="paraText"
        style={
          {
            /*height: "min-content",
          width: "100%",
          color: "white",
          position: "absolute",
          margin: "auto",
          padding: "13px",
          fontSize: "3rem",
          //lineHeight: "90vh",
          background: "rgba(0, 0, 0, 0.4)",*/
            //top: '80vh',
          }
        }
      >
        Quote Unquote, Inc. is Relaunching Operations!
      </div>
    </Parallax>
    {/* -----dynamic blur-----*/}
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require("../images/balloon.jpg")}
      bgImageAlt="the dog"
      className="para"
      strength={-200}
      style={{
        height: "100vh",
      }}
    >
      <div
        className="paraText"
        style={
          {
            /*height: "min-content",
          width: "100%",
          color: "white",
          position: "absolute",
          margin: "auto",
          padding: "13px",
          fontSize: "3rem",
          //lineHeight: "90vh",
          background: "rgba(0, 0, 0, 0.4)",*/
          }
        }
      >
        Blur transition from min to max
      </div>
    </Parallax>

    {/* -----custom background element-----*/}
    <Parallax
      className="para"
      strength={300}
      style={{
        height: "100vh",
      }}
    >
      <div className="paraText">
        Use the background component for custom elements
      </div>
      <Background className="custom-bg">
        <img
          src="https://images.freeimages.com/images/large-previews/322/indian-heads-1391201.jpg"
          alt="fill murray"
          css={{ height: "100%", width: "100vw", backgroundSize: "cover" }}
        />
      </Background>
    </Parallax>

    {/* -----renderProp: "renderLayer"-----*/}
    <Parallax
      bgImage={"../images/ancientart.jpg"}
      strength={400}
      style={{
        height: "100vh",
      }}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            background: `rgba(255, 125, 0, ${percentage * 1})`,
            right: "0%",
            top: "0",
            width: percentage * 4700,
            height: percentage * 1300,
          }}
        />
      )}
    >
      <div
        className="paraText"
        style={
          {
            /*height: "min-content",
          width: "100%",
          color: "white",
          position: "absolute",
          margin: "auto",
          padding: "13px",
          fontSize: "3rem",
          //lineHeight: "90vh",
          background: "rgba(0, 0, 0, 0.4)",*/
            //top: '80vh',
          }
        }
      >
        Quote Unquote, Inc. is Relaunching Operations!
      </div>
    </Parallax>
    <Parallax
      bgImage={"../images/ancientart.jpg"}
      strength={400}
      style={{
        height: "100vh",
      }}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            background: `rgba(0, 0, 153, ${percentage * 1})`,
            backgroundImage: `{"../images/ancientart.jpg"}`,
            left: "0%",
            top: "0",
            width: percentage * 4200,
            height: percentage * 1200,
          }}
        />
      )}
    ></Parallax>
  </div>
)
export default IndexParallax
