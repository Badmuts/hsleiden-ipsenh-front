import React, { Component } from "react";

const widget = {
  background: "white",
  fontFamily: "PT Sans",
  marginLeft: "8px",
  marginRight: "7px"
};

const label = {
  background: "#1539CF",
  color: "white",
  textTransform: "uppercase",
  fontSize: "0.8em",
  letterSpacing: 0.6,
  padding: "3px"
};

const iconStyling = {
  color: "#1539CF"
};

const contentWrapperStyling = {
  padding: "3px 4px"
};

class HeaderWidget extends Component {
  render() {
    return (
      <div style={widget}>
        <div style={label}>
          {this.props.label}
        </div>
        <div className="row" style={contentWrapperStyling}>
          <div className="col-xs">
            <span
              className={`pt-icon-standard pt-icon-${this.props.icon}`}
              style={iconStyling}
            />
          </div>
          <div id="value" className="col-xs">{this.props.value}</div>
        </div>
      </div>
    );
  }
}

export default HeaderWidget;
