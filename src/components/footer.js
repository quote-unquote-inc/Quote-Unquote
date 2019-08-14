import React from "react"
import { FaFacebook, FaGithub } from "react-icons/fa"

import("./footer.scss")


const Footer = () => (
   <footer
      style={{
         bottom: 0,
         position: "absolute",
         width: "100%",
         textAlign: `center`,
         backgroundColor: "lavenderblush",
         opacity: "0.85",
         boxShadow: "grey 0px -3px 20px",
         height: "max-content",
         //marginTop: "auto",
      }}
   >
      <div
         className="donateSide"
         css={{
            float: "left",
            width: "50%",
         }}
      >
         <p
            style={{
               opacity: "1",
               margin: "0",
               fontSize: "13px",
               paddingLeft: "5%",
               paddingRight: "5%",
            }}
         >
            Quote Unquote is a non profit organization, and we rely on the
            support of the community to keep bringing you great content, and to
            continue to take in your amazing content! Please support us by
            donating!
         </p>

         <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            style={{ margin: 0 }}
         >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
               type="hidden"
               name="hosted_button_id"
               value="UAR5TRWNEMGGW"
            />
            <input
               type="image"
               src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
               border="0"
               name="submit"
               title="PayPal - The safer, easier way to pay online!"
               alt="Donate with PayPal button"
            />
            <img
               alt=""
               border="0"
               src="https://www.paypal.com/en_US/i/scr/pixel.gif"
               width="1"
               height="1"
            />
         </form>
      </div>
      <div
         className="socialMedia"
         css={{
            float: "left",
            width: "50%",
            paddingLeft: "5%",
            paddingRight: "5%",
         }}
      >
         <p style={{ opacity: "1", margin: "0", fontSize: "15px" }}>
            For continuous updates on projects and events, please follow our
            social media!
         </p>
         <div
            className="icons"
            style={{
               fontSize: "32px",
               paddingTop: "13px",
            }}
         >
            <a
               href="https://www.facebook.com/SoundingTheTruth"
               target="_blank"
               rel="noopener noreferrer"
               className="facebook hvr-grow"
               style={{
                  color: "#3b5998",
                  marginRight: "13px",
               }}
            >
               <FaFacebook className="facebook" />
            </a>
            <a
               href="https://github.com/quote-unquote-inc/Quote-Unquote"
               target="_blank"
               rel="noopener noreferrer"
               className="github hvr-grow"
               style={{
                  color: "darkslategrey",
                  marginRight: "13px",
               }}
            >
               <FaGithub className="github" />
            </a>
         </div>
      </div>
      <div
         className="copyInfo"
         css={{
            width: "100%",
            float: "inline-start",
         }}
      >
         <p
            style={{
               opacity: "1",
               margin: "0",
               fontSize: "13px",
               width: "100%",
            }}
         >
            © {new Date().getFullYear()}, QUOTE... UNQUOTE, INC. (QUQ) IS A
            501C3 TAX-EXEMPT NONPROFIT INCORPORATED IN 1979.
         </p>
      </div>
   </footer>
)
export default Footer
