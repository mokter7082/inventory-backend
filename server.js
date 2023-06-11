const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("DBConnect successfull");
});

// database connection
// DBConnect();

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

