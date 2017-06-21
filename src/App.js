import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Footer from "./components/Footer";

import {
  Buildings,
  BuildingsCreate,
  Rooms,
  Room,
  Hubs,
  HubsDetails
} from "./containers";

import pkg from "./../package.json";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Route exact path="/" render={() => <Redirect to="/buildings" />} />
            <Route exact path="/buildings" component={Buildings} />
            <Route
              exact
              name="buildings.create"
              path="/buildings/create"
              component={BuildingsCreate}
            />
            <Route
              exact
              name="rooms"
              path="/rooms/:buildingId"
              component={Rooms}
            />
            <Route
              name="room-detail"
              path="/rooms/:buildingId/:roomId"
              component={Room}
            />
            <Route exact name="hubs" path="/hubs" component={Hubs} />
            <Route name="hub-detail" path="/hubs/:id" component={HubsDetails} />
          </div>
          <Footer version={pkg.version} />
        </div>
      </Router>
    );
  }
}

export default App;
