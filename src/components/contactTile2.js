import React from 'react';
//import ReactDOM from 'react-dom';
import posed from 'react-pose';
//import './styles.css';

const Box = posed.div({
  hoverable: true,
  init: {
    scale:1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.3)"
  }
});

const Contact = () => (
  <Box className="box"> </Box>
)
export default Contact