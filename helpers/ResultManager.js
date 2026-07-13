class ResultManager {
  format(routes) {
    const result = [];

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      let distance = 0;
      let duration = 0;
      let fare = 0;

      const cities = [];
      const flights = [];

      route.forEach((flight, index) => {
        if (index == 0) {
          cities.push(flight.from);
        }

        cities.push(flight.to);

        flights.push(flight.flightId);

        distance += flight.distance;
        duration += flight.duration;
        fare += flight.baseFare;
      });

      result.push({
        cities,
        flights,
        stops: cities.length - 2,
        distance,
        flyDuration: duration,
        fare,
      });
    }

    return result;
  }
}

module.exports = ResultManager;


