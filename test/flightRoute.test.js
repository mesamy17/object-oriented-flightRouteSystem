const f = require("../findRoutes");
const assert = require("assert");

describe("Find Route", function () {
  test("should return direct flights between Mumbai and Delhi", function () {
    const actual = f.findRoutes("Mumbai", "Delhi", 0);

    const expected = [
      {
        cities: ["Mumbai", "Delhi"],
        flights: ["AI102"],
        stops: 0,
        distance: 1148,
        flyDuration: 120,
        fare: 4500,
      },
    ];

    assert.deepStrictEqual(actual, expected);
  });

  test("should return maximum single layover flights between Mumbai and Delhi", function () {
    const actual = f.findRoutes("Mumbai", "Delhi", 1);

    const expected = [
      {
        cities: ["Mumbai", "Delhi"],
        flights: ["AI102"],
        stops: 0,
        distance: 1148,
        flyDuration: 120,
        fare: 4500,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Delhi"],
        flights: ["AI103", "AI113"],
        stops: 1,
        distance: 1310,
        flyDuration: 180,
        fare: 5300,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Delhi"],
        flights: ["AI104", "AI117"],
        stops: 1,
        distance: 1960,
        flyDuration: 225,
        fare: 7900,
      },
    ];

    assert.deepStrictEqual(actual, expected);
  });

  test("should return maximum double layover flights between Mumbai and Delhi", function () {
    const actual = f.findRoutes("Mumbai", "Delhi", 2);

    const expected = [
      {
        cities: ["Mumbai", "Pune", "Hyderabad", "Delhi"],
        flights: ["AI101", "AI106", "AI117"],
        stops: 2,
        distance: 1960,
        flyDuration: 270,
        fare: 8300,
      },
      {
        cities: ["Mumbai", "Pune", "Ahmedabad", "Delhi"],
        flights: ["AI101", "AI107", "AI113"],
        stops: 2,
        distance: 1580,
        flyDuration: 240,
        fare: 6600,
      },
      {
        cities: ["Mumbai", "Delhi"],
        flights: ["AI102"],
        stops: 0,
        distance: 1148,
        flyDuration: 120,
        fare: 4500,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Delhi"],
        flights: ["AI103", "AI113"],
        stops: 1,
        distance: 1310,
        flyDuration: 180,
        fare: 5300,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Delhi"],
        flights: ["AI104", "AI117"],
        stops: 1,
        distance: 1960,
        flyDuration: 225,
        fare: 7900,
      },
    ];

    assert.deepStrictEqual(actual, expected);
  });

  test("should return maximum triple layover flights between Mumbai and Kolkata", function () {
    const actual = f.findRoutes("Mumbai", "Kolkata", 3);

    const expected = [
      {
        cities: ["Mumbai", "Pune", "Bangalore", "Kochi", "Kolkata"],
        flights: ["AI101", "AI105", "AI119", "AI126"],
        stops: 3,
        distance: 3250,
        flyDuration: 375,
        fare: 12900,
      },
      {
        cities: ["Mumbai", "Pune", "Bangalore", "Kolkata"],
        flights: ["AI101", "AI105", "AI120"],
        stops: 2,
        distance: 2860,
        flyDuration: 315,
        fare: 10700,
      },
      {
        cities: ["Mumbai", "Pune", "Hyderabad", "Bangalore", "Kolkata"],
        flights: ["AI101", "AI106", "AI115", "AI120"],
        stops: 3,
        distance: 3150,
        flyDuration: 375,
        fare: 12400,
      },
      {
        cities: ["Mumbai", "Pune", "Hyderabad", "Delhi", "Kolkata"],
        flights: ["AI101", "AI106", "AI117", "AI111"],
        stops: 3,
        distance: 3460,
        flyDuration: 390,
        fare: 13800,
      },
      {
        cities: ["Mumbai", "Pune", "Ahmedabad", "Delhi", "Kolkata"],
        flights: ["AI101", "AI107", "AI113", "AI111"],
        stops: 3,
        distance: 3080,
        flyDuration: 360,
        fare: 12100,
      },
      {
        cities: ["Mumbai", "Pune", "Ahmedabad", "Bangalore", "Kolkata"],
        flights: ["AI101", "AI107", "AI114", "AI120"],
        stops: 3,
        distance: 3900,
        flyDuration: 420,
        fare: 15100,
      },
      {
        cities: ["Mumbai", "Delhi", "Jaipur", "Chandigarh", "Kolkata"],
        flights: ["AI102", "AI108", "AI121", "AI124"],
        stops: 3,
        distance: 3628,
        flyDuration: 375,
        fare: 13800,
      },
      {
        cities: ["Mumbai", "Delhi", "Jaipur", "Lucknow", "Kolkata"],
        flights: ["AI102", "AI108", "AI122", "AI123"],
        stops: 3,
        distance: 2903,
        flyDuration: 345,
        fare: 11600,
      },
      {
        cities: ["Mumbai", "Delhi", "Chandigarh", "Kolkata"],
        flights: ["AI102", "AI109", "AI124"],
        stops: 2,
        distance: 3098,
        flyDuration: 315,
        fare: 11900,
      },
      {
        cities: ["Mumbai", "Delhi", "Lucknow", "Kolkata"],
        flights: ["AI102", "AI110", "AI123"],
        stops: 2,
        distance: 2548,
        flyDuration: 285,
        fare: 10100,
      },
      {
        cities: ["Mumbai", "Delhi", "Kolkata"],
        flights: ["AI102", "AI111"],
        stops: 1,
        distance: 2648,
        flyDuration: 240,
        fare: 10000,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Jaipur", "Chandigarh", "Kolkata"],
        flights: ["AI103", "AI112", "AI121", "AI124"],
        stops: 3,
        distance: 3380,
        flyDuration: 360,
        fare: 12500,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Jaipur", "Lucknow", "Kolkata"],
        flights: ["AI103", "AI112", "AI122", "AI123"],
        stops: 3,
        distance: 2655,
        flyDuration: 330,
        fare: 10300,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Delhi", "Chandigarh", "Kolkata"],
        flights: ["AI103", "AI113", "AI109", "AI124"],
        stops: 3,
        distance: 3260,
        flyDuration: 375,
        fare: 12700,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Delhi", "Lucknow", "Kolkata"],
        flights: ["AI103", "AI113", "AI110", "AI123"],
        stops: 3,
        distance: 2710,
        flyDuration: 345,
        fare: 10900,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Delhi", "Kolkata"],
        flights: ["AI103", "AI113", "AI111"],
        stops: 2,
        distance: 2810,
        flyDuration: 300,
        fare: 10800,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Bangalore", "Kochi", "Kolkata"],
        flights: ["AI103", "AI114", "AI119", "AI126"],
        stops: 3,
        distance: 4020,
        flyDuration: 420,
        fare: 16000,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Bangalore", "Kolkata"],
        flights: ["AI103", "AI114", "AI120"],
        stops: 2,
        distance: 3630,
        flyDuration: 360,
        fare: 13800,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Bangalore", "Kochi", "Kolkata"],
        flights: ["AI104", "AI115", "AI119", "AI126"],
        stops: 3,
        distance: 3540,
        flyDuration: 390,
        fare: 14200,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Bangalore", "Kolkata"],
        flights: ["AI104", "AI115", "AI120"],
        stops: 2,
        distance: 3150,
        flyDuration: 330,
        fare: 12000,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Chennai", "Kochi", "Kolkata"],
        flights: ["AI104", "AI116", "AI125", "AI126"],
        stops: 3,
        distance: 3790,
        flyDuration: 390,
        fare: 14500,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Delhi", "Chandigarh", "Kolkata"],
        flights: ["AI104", "AI117", "AI109", "AI124"],
        stops: 3,
        distance: 3910,
        flyDuration: 420,
        fare: 15300,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Delhi", "Lucknow", "Kolkata"],
        flights: ["AI104", "AI117", "AI110", "AI123"],
        stops: 3,
        distance: 3360,
        flyDuration: 390,
        fare: 13500,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Delhi", "Kolkata"],
        flights: ["AI104", "AI117", "AI111"],
        stops: 2,
        distance: 3460,
        flyDuration: 345,
        fare: 13400,
      },
    ];

    assert.deepStrictEqual(actual, expected);
  });

  test("should return maximum four layover flights between Mumbai and Kolkata", function () {
    const actual = f.findRoutes("Mumbai", "Kolkata", 4);

    const expected = [
      {
        cities: ["Mumbai", "Pune", "Bangalore", "Chennai", "Kochi", "Kolkata"],
        flights: ["AI101", "AI105", "AI118", "AI125", "AI126"],
        stops: 4,
        distance: 3790,
        flyDuration: 435,
        fare: 14600,
      },
      {
        cities: ["Mumbai", "Pune", "Bangalore", "Kochi", "Kolkata"],
        flights: ["AI101", "AI105", "AI119", "AI126"],
        stops: 3,
        distance: 3250,
        flyDuration: 375,
        fare: 12900,
      },
      {
        cities: ["Mumbai", "Pune", "Bangalore", "Kolkata"],
        flights: ["AI101", "AI105", "AI120"],
        stops: 2,
        distance: 2860,
        flyDuration: 315,
        fare: 10700,
      },
      {
        cities: [
          "Mumbai",
          "Pune",
          "Hyderabad",
          "Bangalore",
          "Kochi",
          "Kolkata",
        ],
        flights: ["AI101", "AI106", "AI115", "AI119", "AI126"],
        stops: 4,
        distance: 3540,
        flyDuration: 435,
        fare: 14600,
      },
      {
        cities: ["Mumbai", "Pune", "Hyderabad", "Bangalore", "Kolkata"],
        flights: ["AI101", "AI106", "AI115", "AI120"],
        stops: 3,
        distance: 3150,
        flyDuration: 375,
        fare: 12400,
      },
      {
        cities: ["Mumbai", "Pune", "Hyderabad", "Chennai", "Kochi", "Kolkata"],
        flights: ["AI101", "AI106", "AI116", "AI125", "AI126"],
        stops: 4,
        distance: 3790,
        flyDuration: 435,
        fare: 14900,
      },
      {
        cities: [
          "Mumbai",
          "Pune",
          "Hyderabad",
          "Delhi",
          "Chandigarh",
          "Kolkata",
        ],
        flights: ["AI101", "AI106", "AI117", "AI109", "AI124"],
        stops: 4,
        distance: 3910,
        flyDuration: 465,
        fare: 15700,
      },
      {
        cities: ["Mumbai", "Pune", "Hyderabad", "Delhi", "Lucknow", "Kolkata"],
        flights: ["AI101", "AI106", "AI117", "AI110", "AI123"],
        stops: 4,
        distance: 3360,
        flyDuration: 435,
        fare: 13900,
      },
      {
        cities: ["Mumbai", "Pune", "Hyderabad", "Delhi", "Kolkata"],
        flights: ["AI101", "AI106", "AI117", "AI111"],
        stops: 3,
        distance: 3460,
        flyDuration: 390,
        fare: 13800,
      },
      {
        cities: [
          "Mumbai",
          "Pune",
          "Ahmedabad",
          "Jaipur",
          "Chandigarh",
          "Kolkata",
        ],
        flights: ["AI101", "AI107", "AI112", "AI121", "AI124"],
        stops: 4,
        distance: 3650,
        flyDuration: 420,
        fare: 13800,
      },
      {
        cities: ["Mumbai", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kolkata"],
        flights: ["AI101", "AI107", "AI112", "AI122", "AI123"],
        stops: 4,
        distance: 2925,
        flyDuration: 390,
        fare: 11600,
      },
      {
        cities: [
          "Mumbai",
          "Pune",
          "Ahmedabad",
          "Delhi",
          "Chandigarh",
          "Kolkata",
        ],
        flights: ["AI101", "AI107", "AI113", "AI109", "AI124"],
        stops: 4,
        distance: 3530,
        flyDuration: 435,
        fare: 14000,
      },
      {
        cities: ["Mumbai", "Pune", "Ahmedabad", "Delhi", "Lucknow", "Kolkata"],
        flights: ["AI101", "AI107", "AI113", "AI110", "AI123"],
        stops: 4,
        distance: 2980,
        flyDuration: 405,
        fare: 12200,
      },
      {
        cities: ["Mumbai", "Pune", "Ahmedabad", "Delhi", "Kolkata"],
        flights: ["AI101", "AI107", "AI113", "AI111"],
        stops: 3,
        distance: 3080,
        flyDuration: 360,
        fare: 12100,
      },
      {
        cities: [
          "Mumbai",
          "Pune",
          "Ahmedabad",
          "Bangalore",
          "Kochi",
          "Kolkata",
        ],
        flights: ["AI101", "AI107", "AI114", "AI119", "AI126"],
        stops: 4,
        distance: 4290,
        flyDuration: 480,
        fare: 17300,
      },
      {
        cities: ["Mumbai", "Pune", "Ahmedabad", "Bangalore", "Kolkata"],
        flights: ["AI101", "AI107", "AI114", "AI120"],
        stops: 3,
        distance: 3900,
        flyDuration: 420,
        fare: 15100,
      },
      {
        cities: ["Mumbai", "Delhi", "Jaipur", "Chandigarh", "Kolkata"],
        flights: ["AI102", "AI108", "AI121", "AI124"],
        stops: 3,
        distance: 3628,
        flyDuration: 375,
        fare: 13800,
      },
      {
        cities: ["Mumbai", "Delhi", "Jaipur", "Lucknow", "Kolkata"],
        flights: ["AI102", "AI108", "AI122", "AI123"],
        stops: 3,
        distance: 2903,
        flyDuration: 345,
        fare: 11600,
      },
      {
        cities: ["Mumbai", "Delhi", "Chandigarh", "Kolkata"],
        flights: ["AI102", "AI109", "AI124"],
        stops: 2,
        distance: 3098,
        flyDuration: 315,
        fare: 11900,
      },
      {
        cities: ["Mumbai", "Delhi", "Lucknow", "Kolkata"],
        flights: ["AI102", "AI110", "AI123"],
        stops: 2,
        distance: 2548,
        flyDuration: 285,
        fare: 10100,
      },
      {
        cities: ["Mumbai", "Delhi", "Kolkata"],
        flights: ["AI102", "AI111"],
        stops: 1,
        distance: 2648,
        flyDuration: 240,
        fare: 10000,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Jaipur", "Chandigarh", "Kolkata"],
        flights: ["AI103", "AI112", "AI121", "AI124"],
        stops: 3,
        distance: 3380,
        flyDuration: 360,
        fare: 12500,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Jaipur", "Lucknow", "Kolkata"],
        flights: ["AI103", "AI112", "AI122", "AI123"],
        stops: 3,
        distance: 2655,
        flyDuration: 330,
        fare: 10300,
      },
      {
        cities: [
          "Mumbai",
          "Ahmedabad",
          "Delhi",
          "Jaipur",
          "Chandigarh",
          "Kolkata",
        ],
        flights: ["AI103", "AI113", "AI108", "AI121", "AI124"],
        stops: 4,
        distance: 3790,
        flyDuration: 435,
        fare: 14600,
      },
      {
        cities: [
          "Mumbai",
          "Ahmedabad",
          "Delhi",
          "Jaipur",
          "Lucknow",
          "Kolkata",
        ],
        flights: ["AI103", "AI113", "AI108", "AI122", "AI123"],
        stops: 4,
        distance: 3065,
        flyDuration: 405,
        fare: 12400,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Delhi", "Chandigarh", "Kolkata"],
        flights: ["AI103", "AI113", "AI109", "AI124"],
        stops: 3,
        distance: 3260,
        flyDuration: 375,
        fare: 12700,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Delhi", "Lucknow", "Kolkata"],
        flights: ["AI103", "AI113", "AI110", "AI123"],
        stops: 3,
        distance: 2710,
        flyDuration: 345,
        fare: 10900,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Delhi", "Kolkata"],
        flights: ["AI103", "AI113", "AI111"],
        stops: 2,
        distance: 2810,
        flyDuration: 300,
        fare: 10800,
      },
      {
        cities: [
          "Mumbai",
          "Ahmedabad",
          "Bangalore",
          "Chennai",
          "Kochi",
          "Kolkata",
        ],
        flights: ["AI103", "AI114", "AI118", "AI125", "AI126"],
        stops: 4,
        distance: 4560,
        flyDuration: 480,
        fare: 17700,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Bangalore", "Kochi", "Kolkata"],
        flights: ["AI103", "AI114", "AI119", "AI126"],
        stops: 3,
        distance: 4020,
        flyDuration: 420,
        fare: 16000,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Bangalore", "Kolkata"],
        flights: ["AI103", "AI114", "AI120"],
        stops: 2,
        distance: 3630,
        flyDuration: 360,
        fare: 13800,
      },
      {
        cities: [
          "Mumbai",
          "Hyderabad",
          "Bangalore",
          "Chennai",
          "Kochi",
          "Kolkata",
        ],
        flights: ["AI104", "AI115", "AI118", "AI125", "AI126"],
        stops: 4,
        distance: 4080,
        flyDuration: 450,
        fare: 15900,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Bangalore", "Kochi", "Kolkata"],
        flights: ["AI104", "AI115", "AI119", "AI126"],
        stops: 3,
        distance: 3540,
        flyDuration: 390,
        fare: 14200,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Bangalore", "Kolkata"],
        flights: ["AI104", "AI115", "AI120"],
        stops: 2,
        distance: 3150,
        flyDuration: 330,
        fare: 12000,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Chennai", "Kochi", "Kolkata"],
        flights: ["AI104", "AI116", "AI125", "AI126"],
        stops: 3,
        distance: 3790,
        flyDuration: 390,
        fare: 14500,
      },
      {
        cities: [
          "Mumbai",
          "Hyderabad",
          "Delhi",
          "Jaipur",
          "Chandigarh",
          "Kolkata",
        ],
        flights: ["AI104", "AI117", "AI108", "AI121", "AI124"],
        stops: 4,
        distance: 4440,
        flyDuration: 480,
        fare: 17200,
      },
      {
        cities: [
          "Mumbai",
          "Hyderabad",
          "Delhi",
          "Jaipur",
          "Lucknow",
          "Kolkata",
        ],
        flights: ["AI104", "AI117", "AI108", "AI122", "AI123"],
        stops: 4,
        distance: 3715,
        flyDuration: 450,
        fare: 15000,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Delhi", "Chandigarh", "Kolkata"],
        flights: ["AI104", "AI117", "AI109", "AI124"],
        stops: 3,
        distance: 3910,
        flyDuration: 420,
        fare: 15300,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Delhi", "Lucknow", "Kolkata"],
        flights: ["AI104", "AI117", "AI110", "AI123"],
        stops: 3,
        distance: 3360,
        flyDuration: 390,
        fare: 13500,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Delhi", "Kolkata"],
        flights: ["AI104", "AI117", "AI111"],
        stops: 2,
        distance: 3460,
        flyDuration: 345,
        fare: 13400,
      },
    ];
    assert.deepStrictEqual(actual, expected);
  });

  test("should return error for negative layover", function () {
    const actual = f.findRoutes("Mumbai", "Delhi", -1);

    const expected = "unable to find routes";
    assert.deepStrictEqual(actual, expected);
  });

  test("should return all flights between Mumbai and Delhi when layover is invalid", function () {
    const actual = f.findRoutes("Mumbai", "Delhi");

    const expected = [
      {
        cities: ["Mumbai", "Pune", "Hyderabad", "Delhi"],
        flights: ["AI101", "AI106", "AI117"],
        stops: 2,
        distance: 1960,
        flyDuration: 270,
        fare: 8300,
      },
      {
        cities: ["Mumbai", "Pune", "Ahmedabad", "Delhi"],
        flights: ["AI101", "AI107", "AI113"],
        stops: 2,
        distance: 1580,
        flyDuration: 240,
        fare: 6600,
      },
      {
        cities: ["Mumbai", "Delhi"],
        flights: ["AI102"],
        stops: 0,
        distance: 1148,
        flyDuration: 120,
        fare: 4500,
      },
      {
        cities: ["Mumbai", "Ahmedabad", "Delhi"],
        flights: ["AI103", "AI113"],
        stops: 1,
        distance: 1310,
        flyDuration: 180,
        fare: 5300,
      },
      {
        cities: ["Mumbai", "Hyderabad", "Delhi"],
        flights: ["AI104", "AI117"],
        stops: 1,
        distance: 1960,
        flyDuration: 225,
        fare: 7900,
      },
    ];

    assert.deepStrictEqual(actual, expected);
  });
});
