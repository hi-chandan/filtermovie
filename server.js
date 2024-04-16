import express from "express";
import dbConnect from "./dbConnect.js";
import { movierouter } from "./routes/movies.js";
import path from "path";
import cors from "cors";
const app = express();
dbConnect();

app.use(express.json());
app.use(
  cors({
    origin: process.env.frontend,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use("/api/", movierouter);

app.use(express.static(path.join(path.resolve(), "/frontend/build")));
console.log(path.join(path.resolve(), "/frontend/dist/index.html"));
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "frontend/build/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
