describe("config development", () => {
  it("returns local endpoint when in development", () => {
    process.env.NODE_ENV = "development";
    const ENDPOINT = require("./config").ENDPOINT;
    expect(ENDPOINT).toBe("http://localhost:3000");
  });

  it("returns staging endpoint when in staging", () => {
    process.env.NODE_ENV = "staging";
    const ENDPOINT = require("./config").ENDPOINT;
    expect(ENDPOINT).toBe("https://staging.api.ipsenh.daan.codes");
  });

  it("returns production endpoint when in production", () => {
    process.env.NODE_ENV = "production";
    const ENDPOINT = require("./config").ENDPOINT;
    expect(ENDPOINT).toBe("https://api.ipsenh.daan.codes");
  });

  afterEach(() => {
    delete process.env.NODE_ENV;
    jest.resetModules();
  });
});
