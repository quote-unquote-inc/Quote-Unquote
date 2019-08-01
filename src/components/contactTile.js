import React from "react";
//import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import posed from "react-pose";
//import Logo from "./logo";
import ColGor from "./contacts/ColleenGorman"

const Zoomable = posed.div({
  
  idle: {
    position: "static",
    width: "360px",
    height: "auto",
    margin: "16px",
    padding: 0,
    display: "inline-grid",
    flip: true,
    zIndex: "1",
    backgroundColor: "rgba(0,0,0,0)"
  },
  fullscreen: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "80vh",
    flip: true,
    zIndex: "1",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: "3rem",
    margin:0,
  },
});
const Hover = posed.div({
  on: {
    scale: 1.1,
  },
  off: {
    scale: 1,
  }
});
class ImageZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  zoomIn() {
    this.setState({ active: true });
  }

  zoomOut = () => {
    this.setState({ active: false });
  };

  toggleZoom = () => (this.state.active ? this.zoomOut() : this.zoomIn());

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
      <Zoomable
        className="zoomable"
        pose={this.state.active ? "fullscreen" : "idle"}
        onClick={this.toggleZoom}
      >
        <Hover
          className="hover"
          pose={this.state.hovered ? "on" : "off"}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <ColGor />
        </Hover>
      </Zoomable>
    );
  }
}

export default ImageZoom;