import React, { Component } from "react";
import Header from "./../components/Header";
import { createBuilding } from "./../endpoints/buildings";
import { Intent, Position, Toaster } from "@blueprintjs/core";

const style = {
  padding: "30px 50px"
};

class BuildingsCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", location: "" };
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    console.log(this.props);
  }

  componentDidMount() {
    this.successToaster = Toaster.create({
      position: Position.TOP,
      intent: Intent.SUCCESS,
      iconName: "thumbs-up"
    });
    this.errorToaster = Toaster.create({
      position: Position.TOP,
      intent: Intent.DANGER,
      iconName: "thumbs-down"
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  save(event) {
    event.preventDefault();
    createBuilding(this.state)
      .then(savedBuilding =>
        this.successToaster.show({ message: "Building created!" })
      )
      .then(this.props.history.push("/buildings"))
      .catch(err =>
        this.errorToaster.show({ message: "Something went wrong, try again" })
      );
  }

  render() {
    return (
      <div>
        <Header title="Add building" />

        <form action="" style={style} onSubmit={this.save}>
          <div className="pt-form-group pt-large">
            <label className="pt-label" htmlFor="name">
              Name
              <small><span className="pt-text-muted">(required)</span></small>
            </label>
            <div className="pt-form-content">
              <div className="pt-input-group pt-large">
                <input
                  id="name"
                  className="pt-input"
                  placeholder="Name of the building"
                  type="text"
                  dir="auto"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  minLength="2"
                />
              </div>
            </div>
          </div>

          <div className="pt-form-group pt-large">
            <label className="pt-label" htmlFor="location">
              Location
              <small><span className="pt-text-muted">(required)</span></small>
            </label>
            <div className="pt-form-content">
              <div className="pt-input-group pt-large">
                <input
                  id="location"
                  className="pt-input"
                  placeholder="Zernikdreef 11, Leiden"
                  type="text"
                  dir="auto"
                  required
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  minLength="2"
                />
              </div>
            </div>
          </div>

          <button
            className="pt-button pt-intent-success pt-icon-add"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BuildingsCreate;
