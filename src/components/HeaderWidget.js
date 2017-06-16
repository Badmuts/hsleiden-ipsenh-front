import React, { Component } from 'react';

const widget = {
  background: 'white',
  fontFamily: 'PT Sans',
  marginLeft: '8px',
  marginRight: '7px',
};

const label = {
  background: '#1539CF',
  color: 'white',
  textTransform: 'uppercase',
  fontSize: '0.8em',
  letterSpacing: .6,
  padding: '3px'
};

class HeaderWidget extends Component {
  render() {
    return (
      <div style={widget}>
        <div style={label}>
          {this.props.label}
        </div>
        <div className="row" style={{ padding: "3px 4px" }}>
          <div className="col-xs"><span className={`pt-icon-standard pt-icon-${this.props.icon}`} style={{ color: "#1539CF" }}></span></div>
          <div className="col-xs" style={{}}>{this.props.value}</div>
        </div>
      </div>
    )
  }
}

export default HeaderWidget
