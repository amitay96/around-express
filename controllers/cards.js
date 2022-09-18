const Card = require("../models/card");
const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: "An error occured" }));
};

const createCard = (req, res) => {};

const deleteCard = (req, res) => {
  const { id } = req.params;
  Card.findByld(id)
    .orFail(() => {
      const error = new Error("No card found for the specified id");
      error.statusCode = 404;
      throw error;
    })
    .then((card) => Card.deleteOne(card))
    .then(() => res.send({ data: card }))
    .catch((err) => {
      if (err.name === "CastError") {
        res.status(400).send({ message: "Invalid card id" });
      } else if ((err.statusCode = 404)) {
        res.status(404).send({ message: err.message });
      } else {
        res.status(500).send({ message: "An error occured" });
      }
    });
};

const updateLike = (req, res, method) => {};

const likeCard = (req, res) => {};
