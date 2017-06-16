import React from "react";
import ReactDOM from "react-dom";
import HeaderWidget from "./HeaderWidget";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <HeaderWidget />
    </MemoryRouter>,
    div
  );
});

it("has a label", () => {
  const widget = shallow(
    <HeaderWidget label="HeaderWidget test" icon="offline" />
  );
  expect(widget.text()).toBe("HeaderWidget test");
});

it("has an icon", () => {
  const widget = shallow(
    <HeaderWidget label="HeaderWidget test" icon="offline" />
  );
  expect(widget.find(".pt-icon-offline")).toHaveLength(1);
});

it("displays given value", () => {
  const widget = shallow(<HeaderWidget value="1234" label="test" />);
  expect(widget.find("#value").text()).toBe("1234");
});
