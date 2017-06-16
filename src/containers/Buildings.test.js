import React from "react";
import ReactDOM from "react-dom";
import Buildings from "./Buildings";
import { MemoryRouter } from "react-router-dom";

beforeEach(function() {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ ok: true, Id: "123" }));
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Buildings />
    </MemoryRouter>,
    div
  );
});

it("fetches buildings when component mounts", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Buildings />
    </MemoryRouter>,
    div
  );
  expect(global.fetch).toBeCalled();
});
