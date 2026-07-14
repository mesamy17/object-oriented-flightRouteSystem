const resultmanager = require("../helpers/ResultManager");
const assert = require("assert");

describe("Result manager", function () {
  test("Should format for multiple flight routes", function () {
    const manager = new resultmanager();

    const routes = [
      [
        {
          flightId: "AI101",
          from: "Mumbai",
          to: "Pune",
          departureTime: "06:00",
          arrivalTime: "07:00",
          duration: 60,
          distance: 150,
          baseFare: 1200,
          seatsAvailable: 50,
        },
        {
          flightId: "AI105",
          from: "Pune",
          to: "Bangalore",
          departureTime: "08:00",
          arrivalTime: "09:45",
          duration: 105,
          distance: 840,
          baseFare: 3000,
          seatsAvailable: 35,
        },
      ],
    ];

    const result = manager.format(routes);

    assert.deepStrictEqual(result, [
      {
        cities: ["Mumbai", "Pune", "Bangalore"],
        flights: ["AI101", "AI105"],
        stops: 1,
        flyDuration: 165,
        distance: 990,
        fare: 4200,
      },
    ]);
  });

  test("Should return empty array for empty routes", function () {
    const manager = new resultmanager();

    const result = manager.format([]);

    assert.deepStrictEqual(result, []);
  });

  test("Should format for single flight route", function () {
    const manager = new resultmanager();

    const routes = [
      [
        {
          flightId: "AI102",
          from: "Mumbai",
          to: "Delhi",
          departureTime: "07:00",
          arrivalTime: "09:00",
          duration: 120,
          distance: 1148,
          baseFare: 4500,
          seatsAvailable: 30,
        },
      ],
    ];

    const result = manager.format(routes);

    assert.deepStrictEqual(result, [
      {
        cities: ["Mumbai", "Delhi"],
        flights: ["AI102"],
        stops: 0,
        distance: 1148,
        flyDuration: 120,
        fare: 4500,
      },
    ]);
  });
});
