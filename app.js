const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect("mongodb://localhost:27017/aroundb");

app.use(routes);

app.listen(PORT, () => {
  console.log(`App initialised on port ${PORT}`);
});
