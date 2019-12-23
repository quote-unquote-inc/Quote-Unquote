/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
//import { FaFacebook, FaGithub } from "react-icons/fa"

import("./about.scss");

const Dropdown = () => (
   <div className="wrap-collapsible">
      <input id="collapsible" className="toggle" type="checkbox" />
      <label htmlFor="collapsible" className="lbl-toggle">
         Highlights of QUQ's Accomplishments
      </label>
      <div className="collapsible-content">
         <div className="content-inner">
            <p>
               <b>1979</b>
               <br /> Grassroots establishment of QUQ in protest of
               privatization of public airwaves.
               <br />
               <br />
               <b>1980</b>
               <br /> QUQ starts cablecasting Public Access TV Channel 27
               <br />
               <br />
               <b>2001</b>
               <br /> QUQ and ABQ Public Schools establish Freedom of Speech
               Day.
               <br />
               <br />
               <b>2006</b>
               <ul>
                  <li>
                     QUQ establish 1st Authorized Apple Training Center in New
                     Mexico.
                  </li>
                  <li>
                     QUQ launches Local Origination (LO) Access TV channel 26.
                  </li>
                  <li>QUQ starts streaming public access TV online.</li>
                  <li>
                     QUQ works with the Film Apprenticeship Program, Inc. (FAPI)
                     to develop an apprenticeship program for the state of New
                     Mexico.
                  </li>
               </ul>
               <b>2007</b>
               <br />
               <ul>
                  <li>
                     QUQ founds the first state authorized and state-wide
                     charter school, the Media Arts Collaborative Charter
                     School; MACCS opens its doors in 2008.
                  </li>
                  <li>
                     QUQ creates Media Arts Content Standards and Benchmarks to
                     support the founding of MACCS.
                  </li>
               </ul>
               <b>2012</b>
               <br />
               <ul>
                  <li>
                     QUQ is ranked 5th in the nation for the number of hours of
                     1st run, local programming, putting QUQ and Albuquerque
                     behind only Manhattan Neighborhood Network in NYC, Queens
                     Media Center, the Bronx Media Center, and the Chicago
                     Access Network (CAN).
                  </li>
                  <li>
                     The City of Albuquerque pulls QUQ's contract to operate
                     Channels 26 and 27.
                  </li>
               </ul>
               <b>2015</b>
               <br /> QUQ obtains FCC license to operate KQUQ 102.1 FM
               <br />
               <br />
               <b>2018</b>
               <br /> QUQ negotiates a settlement with the city of Albuquerque
               <br />
               <br />
               <b>2019</b>
               <br /> QUQ is in negotiation to operate Educational Access TV
            </p>
         </div>
      </div>
   </div>
)
export default Dropdown
