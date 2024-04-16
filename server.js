require("dotenv").config();
const express = require("express");
const dbConnect = require("./dbConnect");
const movieRoutes = require("./routes/movies");
const path = require("path");
const cors = require("cors");
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

app.use("/api/", movieRoutes);

app.use(express.static(path.join(path.resolve(), "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "frontend/dist/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
