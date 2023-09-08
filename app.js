const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");

const app = express();
app.use(express.json());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:AR1gI8TluPo2gspz@cluster0.v6kfsfw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(9000);
  })
  .catch((err) => console.log(err));
