import React, { Component } from "react";
import Header from "./../components/Header";
import HeaderWidget from "./../components/HeaderWidget";
import { Tag, Intent, Classes, Button } from "@blueprintjs/core";
import { buildings } from "./../endpoints/buildings";
import { save } from "./../endpoints/hubs";
import _ from "lodash";

class HubsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hub: {},
      buildings: [],
      selectedBuilding: false
    };
    this.state = props.location.state;
    this.handleSelectBuilding = this.handleSelectBuilding.bind(this);
    this.setRoom = this.setRoom.bind(this);
    this.saveHub = this.saveHub.bind(this);
  }

  componentDidMount() {
    if (!this.state.hub.room.id) {
      buildings()
        .then(buildings =>
          this.setState({ buildings: buildings, hub: this.state.hub })
        )
        .catch(err => console.error(err));
    }
  }

  handleSelectBuilding(event) {
    let selected = event.target.value;
    selected = _.filter(this.state.buildings, ["id", selected])[0];
    this.setState({ selectedBuilding: selected });
  }

  setRoom(event) {
    let selected = event.target.value;
    selected = _.filter(this.state.selectedBuilding.rooms, ["id", selected])[0];
    this.setState({ selectedRoom: selected });
  }

  saveHub(event) {
    this.setState({ saving: true });
    let hub = _.cloneDeep(this.state.hub);
    hub.room = _.cloneDeep(this.state.selectedRoom);

    save(hub)
      .then(_hub => {
        this.setState({ saving: false, hub: _hub });
      })
      .catch(err => {
        console.log(err);
        this.setState({ saving: false });
      });
  }

  render() {
    const hub = this.state.hub;
    const rooms = this.state.selectedBuilding
      ? this.state.selectedBuilding.rooms
      : [];

    return (
      <div>
        <Header title={`Hub ${hub.name}`}>
          <div className="row">
            <HeaderWidget label="status" icon="pulse" value={hub.status} />
            <HeaderWidget
              label="sensors"
              icon="graph"
              value={hub.sensors.length}
            />
            <HeaderWidget
              label="location"
              icon="geolocation"
              value={hub.room.name}
            />
          </div>
        </Header>
        <div style={{ padding: "30px 50px" }}>
          <div className="box" style={{ marginBottom: "15px" }}>
            <h2>Sensors</h2>
            <table className="pt-table pt-bordered" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {hub.sensors.map(sensor =>
                  <tr key={sensor.id}>
                    <td>{sensor.name}</td>
                    <td>{sensor.sensorType}</td>
                    <td><code>{sensor.status.toString()}</code></td>
                  </tr>
                )}
              </tbody>
            </table>

            <hr />
            <h2>Room</h2>
            {hub.room.name
              ? <div
                  className="pt-card pt-elevation-0 pt-interactive box"
                  style={{ marginBottom: "15px" }}
                >
                  <h5>
                    <span
                      className="pt-icon-large pt-icon-home"
                      style={{ paddingRight: "5px" }}
                    />
                    {hub.room.name}
                  </h5>
                  <div className="row">
                    <div className="col-xs">
                      <div className="box">
                        <small className="pt-text-muted">Size</small><br />
                        <Tag
                          className={Classes.MINIMAL}
                          intent={Intent.PRIMARY}
                        >
                          {" "}<span className="pt-icon-zoom-to-fit" />{" "}
                          {hub.room.size} m<sup>2</sup>
                        </Tag>
                      </div>
                    </div>
                    <div className="col-xs">
                      <div className="box">
                        <small className="pt-text-muted">Max. Capacity</small>
                        <br />
                        <Tag className={Classes.MINIMAL} intent={Intent.DANGER}>
                          <span className="pt-icon-segmented-control" />{" "}
                          {hub.room.maxCapacity}
                        </Tag>
                      </div>
                    </div>
                    <div className="col-xs">
                      <div className="box">
                        <small className="pt-text-muted">Occupation</small>
                        <br />
                        <Tag className={Classes.MINIMAL}>
                          <span className="pt-icon-people" />{" "}
                          {hub.room.occupation}
                        </Tag>
                      </div>
                    </div>
                  </div>
                </div>
              : <form>
                  <div className="pt-callout pt-intent-warning pt-icon-warning-sign">
                    <h5>This hub is not connected with a room</h5>
                    You should select the room this hub is located in via the
                    dropdown below.
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-xs">
                      <div className="box pt-form-group">
                        <label
                          className="pt-label"
                          htmlFor="example-form-group-input-a"
                        >
                          Building
                          <span className="pt-text-muted">(required)</span>
                        </label>
                        <div className="pt-form-content">
                          <div className="pt-select pt-large">
                            <select
                              value={
                                this.state.selectedBuilding &&
                                this.state.selectedBuilding.id
                              }
                              onChange={this.handleSelectBuilding}
                            >
                              <option value="false">
                                Choose a building...
                              </option>
                              {this.state.buildings &&
                                this.state.buildings.map(building =>
                                  <option key={building.id} value={building.id}>
                                    {building.name}
                                  </option>
                                )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs">
                      <div className="box pt-form-group">
                        <label
                          className="pt-label"
                          htmlFor="example-form-group-input-a"
                        >
                          Room
                          <span className="pt-text-muted">(required)</span>
                        </label>
                        <div className="pt-form-content">
                          <div className="pt-select pt-large">
                            <select
                              disabled={!this.state.selectedBuilding}
                              onChange={this.setRoom}
                            >
                              <option value="false">Choose a room...</option>
                              {rooms.length &&
                                rooms.map(room =>
                                  <option value={room.id} key={room.id}>
                                    {room.name}
                                  </option>
                                )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs">
                      <div className="box pt-form-group">
                        <div className="pt-form-content">
                          <Button
                            className="pt-button pt-large pt-intent-success"
                            type="button"
                            disabled={!this.state.selectedRoom}
                            onClick={this.saveHub}
                            loading={this.state.saving}
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>}
          </div>
        </div>
      </div>
    );
  }
}

export default HubsDetails;
