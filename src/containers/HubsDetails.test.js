import React from "react";
import ReactDOM from "react-dom";
import HubsDetails from "./HubsDetails";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <HubsDetails />
    </MemoryRouter>,
    div
  );
});
