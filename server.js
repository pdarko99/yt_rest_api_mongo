import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes.js";

const app = express();

app.use(express.json());

const url = "mongodb://localhost/blogs";
const port = 3000;

mongoose
  .connect(url)
  .then((data) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(`error connecting to db: ${err}`);
  });

app.use("/api/v1/blogs", blogRouter);

app.use((req, res, next) => {
  res.status(500).send("no such route");
});

app.use((err, req, res, next) => {
  console.log("hey");
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log("listening on port");
});
