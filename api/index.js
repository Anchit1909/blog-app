import express from "express";

const app = express();

app.use(express.json()); //to allow sending of data to db.

app.listen(8800, () => {
  console.log("Connected!");
});
