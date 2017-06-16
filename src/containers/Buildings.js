import React, { Component } from 'react';
import { Spinner } from '@blueprintjs/core';
import Header from './../components/Header';
import Nav from './../components/Nav';

const style = {
  padding: '30px 50px'
};

class Buildings extends Component {
  state = {
    buildings: []
  };

  componentDidMount() {
    fetch('http://localhost:3000/buildings')
      .then(res => res.json())
      .then(buildings => {
        this.setState({ buildings })
      })
      .catch(err => {
        this.setState({ err })
      })
  }

  renderNav() {
    return (<Nav />)
  }

  render() {
    const { buildings } = this.state;

    return (
      <div>
        <Header topNav={this.renderNav()} title="Buildings">
          <nav className="pt-navbar">
            <div className="pt-navbar-group pt-align-left">
              <div className="pt-input-group .modifier">
                <span className="pt-icon pt-icon-filter"></span>
                <input type="text" className="pt-input" placeholder="Zoeken..." />
              </div>
            </div>
          </nav>
        </Header>

        <div style={style}>
          <h2>Buildings</h2>
          {buildings ? (
            buildings.map(building => (
              <div className="pt-card pt-elevation-0 pt-interactive">
                <h5>{building.name}</h5>
                <p>{building.location}</p>
              </div>
            ))
          ) : (
              <Spinner />
            )}
        </div>
      </div>
    )
  }
}

export default Buildings
