import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3400;



mongoose.connect('mongodb://127.0.0.1:27017/physiotreat')
  .then(() => {
    console.log("Connected To Db");
  })
  .catch(() => {
    console.log("Error In Conncted To Db");
  });

app.listen(PORT, () => {
  console.log("http://loalhost:", PORT);
});
