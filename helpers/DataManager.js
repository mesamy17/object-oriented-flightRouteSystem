const fs = require("fs");

class DataManager {
  constructor(filePath = "./data/input.json") {
    this.filePath = filePath;
  }

  readFlights() {
    try {
      if (!fs.existsSync(this.filePath)) {
        return [];
      }

      const data = fs.readFileSync(this.filePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      console.log("Unable to read flight data");
      return [];
    }
  }
}

module.exports = DataManager;
