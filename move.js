import dbConnect from "./dbConnect.js";
import Movie from "./models/Movie.js";
import move from "./config/movies.json";
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
