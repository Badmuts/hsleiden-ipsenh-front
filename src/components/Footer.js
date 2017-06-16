import React, { Component } from "react";

const footerStyle = {
  textAlign: "center",
  padding: "30px 20px",
  color: "#9B9B9B",
  fontSize: "12px",
  fontFamily: "Open Sans"
};

class Footer extends Component {
  render() {
    return (
      <div className="Footer" style={footerStyle}>
        IPSENH - Groep 2 - v{this.props.version || "DEV"}
      </div>
    );
  }
}

export default Footer;
