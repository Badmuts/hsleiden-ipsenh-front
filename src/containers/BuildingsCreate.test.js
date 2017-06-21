import React from "react";
import ReactDOM from "react-dom";
import BuildingsCreate from "./BuildingsCreate";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <BuildingsCreate />
    </MemoryRouter>,
    div
  );
});
