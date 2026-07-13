const a = require("../helpers/dataChecker");

describe("Data Checker", function () {
  const checker = new a();

  test("All inputs valid", function () {
    try {
      checker.specifier("Mumbai", "Delhi", 2);
    } catch (error) {
      fail("Expected no error");
    }
  });

  test("Invalid source", function () {
    try {
      checker.specifier(1, "Delhi", 2);
      fail("Expected an error");
    } catch (error) {
      expect(error);
    }
  });

  test("Invalid destination", function () {
    try {
      checker.specifier("Mumbai", 1, 2);
      fail("Expected an error");
    } catch (error) {
      expect(error);
    }
  });

  test("Invalid source and destination", function () {
    try {
      checker.specifier(0, 1, 2);
      fail("Expected an error");
    } catch (error) {
      expect(error);
    }
  });

  test("Invalid maxStops", function () {
    try {
      checker.specifier("Mumbai", "Delhi", -1);
      fail("Expected an error");
    } catch (error) {
      expect(error);
    }
  });
});
