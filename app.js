const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const productRouter = require("./router/product.route");
const storeRouter = require("./router/store.route");
// Default middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
// Start routing form here

app.use("/api/v1/product", productRouter);
app.use("/api/v1/store", storeRouter);


module.exports = app;
