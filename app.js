const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/product.route");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors());

app.use("/api/v1/product", router);


module.exports = app;
