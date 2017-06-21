import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>,
    div
  );
});

it("shows 2 links", () => {
  const nav = shallow(<Nav />);
  expect(nav.find("Link")).toHaveLength(2);
});
