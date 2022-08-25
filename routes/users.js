const router = require("express").Router();
const fs = require("fs").promises;
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "users.json");

router.get("/", (req, res) => {
  fs.readFile(dataPath, { encoding: "utf-8" })
    .then((users) => {
      res.send({ data: users });
    })
    .catch(() =>
      res.status(500).send({ message: "An error has occured on the server" })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile(dataPath, { encoding: "utf-8" })
    .then((users) => {
      const data = JSON.parse(users);
      const user = data.find((user) => user._id === id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: `User ${id} not found` });
      }
    })
    .catch(() =>
      res.status(500).send({ message: "An error has occured on the server" })
    );
});

module.exports = { usersRouter: router };
