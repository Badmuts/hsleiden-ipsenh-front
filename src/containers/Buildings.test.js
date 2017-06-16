import React from "react";
import ReactDOM from "react-dom";
import Buildings from "./Buildings";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Buildings />
    </MemoryRouter>,
    div
  );
});
