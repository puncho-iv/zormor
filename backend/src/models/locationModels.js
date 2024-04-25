const mongoose = require("mongoose");

const locationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Add a location name"],
    },
    description: {
      type: String,
      required: [true, "Add location description"],
    },
    location: {
      type: String,
      required: [true, "Add a place location"],
    },
    openHours: {
      type: String,
      require: [true, "Add a time"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Place", locationSchema);
