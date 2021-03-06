import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Stuxnet."
    };
  }

  render() {
    return (
      <nav className="pt-navbar">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">{this.state.name}</div>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <Link className="pt-button pt-minimal" to="/buildings">
            Buildings
          </Link>
          <Link className="pt-button pt-minimal" to="/hubs">Hubs</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
