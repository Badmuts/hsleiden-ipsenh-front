import { buildings, rooms } from "./buildings";

describe("buildings API", function() {
  beforeEach(function() {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ ok: true, Id: "123" }));
  });

  it("has the correct endpoint", function() {
    buildings().catch(function() {});
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.ipsenh.daan.codes/buildings"
    );
  });

  it("transforms response to JSON", function() {
    buildings()
      .then(function(buildings) {
        expect(buildings).toBe({ Id: "123" });
      })
      .catch(function() {});
  });
});

describe("rooms API", function() {
  beforeEach(function() {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ ok: true, Id: "123" }));
  });

  it("has the correct endpoint", function() {
    rooms({ id: "123" }).catch(function() {});
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.ipsenh.daan.codes/buildings/123/rooms"
    );
  });

  it("transforms response to JSON", function() {
    rooms({ id: "123" })
      .then(function(rooms) {
        expect(rooms).toBe({ Id: "123" });
      })
      .catch(function() {});
  });
});
