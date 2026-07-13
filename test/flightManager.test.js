const FlightManager = require("../helpers/FlightManager");

describe("Flight Manager", function () {
  test("should return all flights", function () {
    const manager = new FlightManager();

    const flights = manager.getAllFlights();

    expect(Array.isArray(flights)).toBe(true);
    expect(flights).not.toEqual([]);
  });

  test("should return route from Mumbai to Delhi", () => {
    const manager = new FlightManager();

    const routes = manager.getRoutes("Mumbai", "Delhi", 1);

    expect(Array.isArray(routes)).toBe(true);
    expect(routes).not.toEqual([]);
  });

  test("should return empty array if route is not found", () => {
    const manager = new FlightManager();

    const routes = manager.getRoutes("Mumbai", "London", 2);

    expect(routes).toEqual([]);
  });

  test("should return empty array when max stops are not enough", () => {
    const manager = new FlightManager();

    const routes = manager.getRoutes("Mumbai", "Kolkata", 0);

    expect(routes).toEqual([]);
  });
});
