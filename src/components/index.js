import React from 'react'
import LazyHero from 'react-lazy-hero'

import "./index.scss"

const AltParallax = () => (
  <div
    className="mainPara"
    css={{
      overflow: "hidden",
    }}
  >
    <LazyHero
      imageSrc="https://cdn.hipwallpaper.com/m/3/17/rj70ie.jpg"
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
          color: "white",
          width: "100vw",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <h1
          css={{
            fontSize: "3.25rem",
            padding: "26px",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          Quote Unquote, Inc. is relaunching operations!
        </h1>
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
        <h1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          What is Quote Unquote?
        </h1>
        <p
          css={{
            fontSize: "1.5rem",
            lineHeight: "36px",
            "@media(max-width: 480px)": {
              fontSize: "1.3rem",
            },
          }}
        >
          Quote Unquote, Inc. is a nationally recognized non-profit media
          organization that has provided public access and local origination
          programs to the Albuquerque area since 1981. We strive to inspire open
          communication between the public through various forms of media, to
          help keep true Democracy alive.
        </p>
      </div>
    </LazyHero>

    <LazyHero
      imageSrc="https://i.vimeocdn.com/video/676887219.jpg?mw=1920&mh=1080&q=70"
      className="paraImage"
      parallaxOffset="100"
      minHeight="100vh"
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
        <h1
          css={{
            fontSize: "3.25rem",
            color: "white",
            padding: "26px",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          About Us
        </h1>
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
          minHeight: "120vh",
        },
      }}
    >
      <div
        css={{
          color: "white",
          width: "90vw",
        }}
      >
        <h1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          The Vision
        </h1>
        <p
          css={{
            fontSize: "1.5rem",
            lineHeight: "36px",
            "@media(max-width: 480px)": {
              fontSize: "1.3rem",
            },
          }}
        >
          Our vision is to support Freedom of Speech and Democracy through
          community media. We concentrate on using media as a tool for education
          and empowerment.
        </p>
        <h1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          Our Goals
        </h1>
        <p
          css={{
            fontSize: "1.5rem",
            lineHeight: "36px",
            "@media(max-width: 480px)": {
              fontSize: "1.3rem",
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
      imageSrc="https://wallpapercave.com/wp/wp1810973.jpg"
      className="paraImage"
      parallaxOffset="100"
      minHeight="100vh"
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
        <h1
          css={{
            fontSize: "3.25rem",
            color: "white",
            padding: "26px",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          Services
        </h1>
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
          minHeight: "120vh",
        },
      }}
    >
      <div
        css={{
          color: "white",
          width: "90vw",
        }}
      >
        <h1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 490px)": {
              fontSize: "3rem !important",
            },
          }}
        >
          PRODUCTION
        </h1>
        <p
          css={{
            fontSize: "1.5rem",
            lineHeight: "36px",
            "@media(max-width: 480px)": {
              fontSize: "1.3rem",
            },
          }}
        >
          Live & pre-recorded multi-media production and streaming services for
          events and sponsored shows.
        </p>
        <h1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          TRAINING
        </h1>
        <p
          css={{
            fontSize: "1.5rem",
            lineHeight: "36px",
            "@media(max-width: 480px)": {
              fontSize: "1.3rem",
            },
          }}
        >
          Pre-production and Tri-caster production training for k-12 and
          post-secondary educational institutions.
        </p>
        <h1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          MORE
        </h1>
        <p
          className=""
          css={{
            fontSize: "1.5rem",
            lineHeight: "36px",
            "@media(max-width: 480px)": {
              fontSize: "1.3rem",
            },
          }}
        >
          Live Community Access Media Pod (CAMP) site setup. <br />
          CAMP site community engagement- multi-media and/or mural project
          design and/or implementation.
        </p>
      </div>
    </LazyHero>
    <LazyHero
      imageSrc="https://code2prog.com/wp-content/uploads/2015/01/ceystalhorizon-flat-design-wallpapers-HD-free-wallpapers-backgrounds-images-FHD-4k-download-2014-2015-2016-1024x576.jpg"
      className="paraImage"
      parallaxOffset="100"
      minHeight="100vh"
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
        <h1
          css={{
            fontSize: "3.25rem",
            color: "white",
            padding: "26px",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          Contact Us
        </h1>
      </div>
    </LazyHero>
    <LazyHero
      imageSrc="#"
      parallaxOffset="100"
      minHeight="130vh"
      color="#282E34"
      className="paraSolid"
      css={{
        boxShadow: "0px 10px 26px inset",
      }}
    >
      <div
        css={{
          color: "white",
          //width: "80vw",
        }}
      >
        <h1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          Contact us directly:
        </h1>
        <p
          css={{
            fontSize: "1.5rem",
            lineHeight: "36px",
            "@media(max-width: 480px)": {
              fontSize: "1.3rem",
            },
          }}
        >
          Call us @{" "}
          <a
            css={{
              color: "white",
              ":hover": {
                color: "#cb1741",
              },
            }}
            href="tel:+15055017700"
          >
            (505) 501-7700
          </a>
          <br />
          Reach us by mail @ PO Box 26206, Albuquerque, NM 87107
          <br />
          Or come see us @{" "}
          <a
            css={{
              color: "white",
              ":hover": {
                color: "#cb1741",
              },
            }}
            href="http://maps.google.com/?q=5005 4th St. NW Ste. 102, Albuquerque NM 87107"
            target="_blank"
            rel="noopener noreferrer"
          >
            5005 4th St. NW Ste. 102, Albuquerque NM 87107
          </a>
        </p>
        <h1
          css={{
            fontSize: "3.25rem",
            "@media(max-width: 480px)": {
              fontSize: "3rem",
            },
          }}
        >
          Or send us a message:
        </h1>
      </div>

      <div className="form">
        <form
          method="post"
          action="#"
          data-netlify="true"
          name="contact"
          css={{
            textAlign: "center",
            margin: "0",
          }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            css={{
              textAlign: "center",
              width: "70vw",
              margin: "13px 13%",
              background: "transparent",
              color: "white",
              borderStyle: "groove",
              borderColor: "white",
              borderLeft: "0px",
              borderRight: "0px",
              borderTop: "0px",
              borderRadius: "9px",
            }}
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@domain.com"
            css={{
              textAlign: "center",
              width: "70vw",
              margin: "13px 13%",
              background: "transparent",
              color: "white",
              borderStyle: "groove",
              borderColor: "white",
              borderLeft: "0px",
              borderRight: "0px",
              borderTop: "0px",
              borderRadius: "9px",
            }}
            required
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone (### ### ####)"
            css={{
              textAlign: "center",
              width: "70vw",
              margin: "13px 13%",
              background: "transparent",
              color: "white",
              borderStyle: "groove",
              borderColor: "white",
              borderLeft: "0px",
              borderRight: "0px",
              borderTop: "0px",
              borderRadius: "9px",
            }}
          />
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Type Your Message Here"
            required
            css={{
              textAlign: "center",
              width: "70vw",
              margin: "13px 13%",
              background: "transparent",
              color: "white",
              borderStyle: "groove",
              borderColor: "white",
              borderRadius: "9px",
            }}
          />
          <input
            type="submit"
            value="Send Message"
            css={{
              margin: "0 20%",
              borderRadius: "13px",
              background: "transparent",
              color: "white",
              ":active": {
                backgroundColor: "#BE0405",
              },
            }}
          />
        </form>
      </div>
    </LazyHero>
  </div>
)
export default AltParallax