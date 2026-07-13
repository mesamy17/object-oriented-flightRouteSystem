const RouteService = require("./helpers/dataChecker");
const FlightManager = require("./helpers/FlightManager");
const ResultManager = require("./helpers/ResultManager");

const routeService = new RouteService();
const flightManager = new FlightManager();
const resultManager = new ResultManager();

function findRoutes(source, destination, maxStops) {
  try {
    const routes = routeService.specifier(source, destination, maxStops);

    const result = flightManager.getRoutes(source, destination, maxStops);

    let output = resultManager.format(result);

    return output;
  } catch (error) {
    return "unable to find routes";
  }
}

console.log(findRoutes("Mumbai", "Kolkata", 2));
