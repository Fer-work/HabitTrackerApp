require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/router");

// Set up DOTENV variables
const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_CONNECTION_STRING;

// Connect to the database
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connection to the database successful");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Set up the app
const app = express();

// Serves static files from the "public" directory.
app.use(express.static("public"));

// Using the "false" value means the data sent from a POST request will not be encoded in the URL. Instead, the middleware will parse the data on the 'req.body' as a javascript object
app.use(express.urlencoded({ extended: false }));

// Set up the view engine
app.set("view engine", "ejs");

// Set up the router
app.use("/", router);

// Start the app

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
