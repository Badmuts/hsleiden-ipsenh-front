import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
    div
  );
});

it("prints the version when provided", () => {
  const footer = shallow(<Footer version="1.0.0" />);
  expect(footer.text()).toBe("IPSENH - Groep 2 - v1.0.0");
});
