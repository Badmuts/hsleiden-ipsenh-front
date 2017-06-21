import React, { Component } from "react";
import { Spinner, NonIdealState } from "@blueprintjs/core";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import { Link } from "react-router-dom";
import { buildings } from "./../endpoints/buildings";
import _ from "lodash";

const style = {
  padding: "30px 50px"
};

class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: []
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    buildings()
      .then(buildings => {
        return (this.fetchedBuildings = buildings);
      })
      .then(buildings => {
        this.setState({ buildings });
      })
      .catch(err => {
        this.setState({ err });
      });
  }

  search(event) {
    const query = event.target.value;
    const filteredBuilings = _.filter(
      this.fetchedBuildings,
      building =>
        _.lowerCase(building.name).indexOf(_.lowerCase(query)) > -1 ||
        _.lowerCase(building.location).indexOf(_.lowerCase(query)) > -1
    );
    this.setState({ buildings: filteredBuilings, query: query });
  }

  renderNav() {
    return <Nav />;
  }

  render() {
    const { buildings, query } = this.state;

    return (
      <div>
        <Header topNav={this.renderNav()} title="Buildings">
          <nav className="pt-navbar">
            <div className="pt-navbar-group pt-align-left">
              <div className="pt-input-group">
                <span className="pt-icon pt-icon-filter" />
                <input
                  type="text"
                  className="pt-input"
                  placeholder="Zoeken..."
                  value={this.state.query}
                  onChange={this.search}
                />
              </div>
            </div>
            <div className="pt-navbar-group pt-align-right">
              <Link
                className="pt-button pt-intent-success pt-icon-add"
                to="/buildings/create"
              >
                New building
              </Link>
            </div>
          </nav>
        </Header>

        <div style={style}>
          <h2>Buildings</h2>
          {buildings
            ? buildings.map(building =>
                <Link key={building.id} to={`/rooms/${building.id}`}>
                  <div className="pt-card pt-elevation-0 pt-interactive">
                    <h5>{building.name}</h5>
                    <p>{building.location}</p>
                  </div>
                </Link>
              )
            : <Spinner />}

          {!_.isEmpty(query) && buildings.length < 1
            ? <NonIdealState
                visual="search"
                title="No search results"
                description={`No results for: ${query}`}
              />
            : <div />}
        </div>
      </div>
    );
  }
}

export default Buildings;
