const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(routes);
app.get("*", (req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`App initialised on port ${PORT}`);
});
