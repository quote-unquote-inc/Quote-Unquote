import React from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";

//import "./styles.css";

const config = {
  off: {
    opacity: 0.5,
    scale: 1
  },
  on: {
    opacity: 1,
    scale: 2
  }
};

const Box = posed.div(config);

class Contact extends React.Component {
  state = {
    hovered: false
  };

  handleMouseEnter = () => {
    this.setState({
      hovered: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hovered: false
    });
  };

  render() {
    return (
      <div className="container">
        <Box
          className="box"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          pose={this.state.hovered ? "on" : "off"}
        />
      </div>
    );
  }
}
export default Contact