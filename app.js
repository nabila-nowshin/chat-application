const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
dotenv.config();

//database integration
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@tiptopgardeners.3nfx9jd.mongodb.net/?appName=TipTopGardeners`
  )
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("View engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.post("/", async (req, res) => {});

//error handling
//404 not found

app.listen(process.env.PORT, () => {
  console.log(`App listening to port ${process.env.PORT}`);
});
