const RouteService = require("./helpers/dataChecker");
const FlightManager = require("./helpers/FlightManager");

const routeService = new RouteService();
const flightManager = new FlightManager();

function findRoutes(source, destination, maxStops) {
  try {
    const routes = routeService.specifier(source, destination, maxStops);

    const result = flightManager.getRoutes(source, destination, maxStops);
  } catch (error) {
    return "unable to find routes";
  }
}

console.log(findRoutes("Mumbai", "Kolkata", 2));
