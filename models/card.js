const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'The "name" field must be filled in'],
      minlength: [1, 'The minimum length of the "name" field is 2'],
      maxlength: [30, 'The maximum length of the "name" field is 30'],
    },
    link: {
      type: String,
      required: [true, 'The "link" field must be filled in'],
      validate: {
        validator: (value) => value.match(/^(https:|http:|www\.)\S*/gi),
        message: 'The "link" field must be a valid URL',
      },
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("card", cardSchema);
