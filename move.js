const dbConnect = require("./dbConnect");
const Movie = require("./models/Movie");
const Move = require("./config/movies.json");

const start = async () => {
  try {
    await dbConnect();
    await Movie.create(Move);
    console.log("Success");
  } catch (error) {
    console.log("This is not working");
  }
};

start();
