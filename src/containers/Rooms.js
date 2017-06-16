import React, { Component } from "react";
import { Spinner } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import { rooms } from "./../endpoints/buildings";

const style = {
  padding: "30px 50px"
};

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      err: null
    };
  }

  componentDidMount() {
    rooms(this.props.match.params.buildingId)
      .then(rooms => this.setState({ rooms: rooms }))
      .catch(err => this.setState({ err: err }));
  }

  renderNav() {
    return <Nav />;
  }

  render() {
    const { rooms } = this.state;

    return (
      <div>
        <Header topNav={this.renderNav()} title="Rooms">
          <nav className="pt-navbar">
            <div className="pt-navbar-group pt-align-left">
              <div className="pt-input-group .modifier">
                <span className="pt-icon pt-icon-filter" />
                <input
                  type="text"
                  className="pt-input"
                  placeholder="Zoeken..."
                />
              </div>
            </div>
          </nav>
        </Header>

        <div style={style}>
          <h2>Rooms</h2>
          {rooms
            ? rooms.map(room =>
                <Link
                  key={room.id}
                  to={`/rooms/${this.props.match.params.buildingId}/${room.id}`}
                >
                  <div className="pt-card pt-elevation-0 pt-interactive">
                    <h5>{room.name}</h5>
                    <p>Occupation: {room.occupation}</p>
                  </div>
                </Link>
              )
            : <Spinner />}
        </div>
      </div>
    );
  }
}

export default Rooms;
