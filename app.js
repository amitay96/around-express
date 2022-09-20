const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const { PORT = 3000 } = process.env;

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '632993d9eb1b5a307bb8d868'
  };
  next();
}); 

mongoose.connect("mongodb://localhost:27017/aroundb");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App initialised on port ${PORT}`);
});
