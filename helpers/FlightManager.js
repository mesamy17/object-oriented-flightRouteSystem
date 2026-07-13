const DataManager = require("./DataManager");

class FlightManager {
  constructor() {
    this.dataManager = new DataManager();
    this.flights = this.dataManager.readFlights();
  }

  getAllFlights() {
    return this.flights;
  }

  getRoutes(source, destination, maxStops) {
    const routes = [];
    this.findRoute(source, destination, [], routes, maxStops);
    return routes;
  }

  findRoute(current, destination, currentRoute, routes, maxStops) {
    if (currentRoute.length > maxStops) {
      return;
    }
    for (let i = 0; i < this.flights.length; i++) {
      const flight = this.flights[i];
      if (flight.from != current) {
        continue;
      }

      if (
        currentRoute.some(
          (item) =>
            item.from == flight.from &&
            item.to == flight.to &&
            item.flightId == flight.flightId,
        )
      ) {
        continue;
      }

      const newRoute = currentRoute.concat(flight);

      if (flight.to == destination) {
        routes.push(newRoute);
      } else {
        this.findRoute(flight.to, destination, newRoute, routes, maxStops);
      }
    }
  }
}

module.exports = FlightManager;
