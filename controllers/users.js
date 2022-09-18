const User = require("../models/user");

const getUsers = (req, res) => {
  return User.find({}).then((users) => res.status(200).send(users));
};

const getUser = (req, res) => {
  const { id } = req.params;
  return User.findById(id).then((user) => {
    res.status(200).send(user);
  });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        res.status(400).send({
          message: `${Object.values(err.errors)
            .map((error) => error.message)
            .join(", ")}`,
        });
      } else {
        res.status(500).send({ message: "An error occured" });
      }
    });
};

const updateUserInfo = (req, res) => {};
const updateUserAvatar = (req, res) => {};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUserInfo,
  updateUserAvatar,
};
