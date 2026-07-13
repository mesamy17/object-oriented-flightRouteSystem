class check {
  constructor() {}

  specifier(source, destination, maxStops) {
    if (typeof source != "string") {
      throw new Error("Invalid source");
    }

    if (typeof destination != "string") {
      throw new Error("Invalid destination");
    }

    if (maxStops < 0) {
      throw new Error("Invalid stops");
    }
  }
}

module.exports = check;
