const mongoose = require("mongoose");

const monthSchema = new mongoose.Schema({
  googleId: String,
  date: Date,
  goal: String,
  unit: String,
  expected_targets: [Number=0, Number=0, Number=0, Number=0],
  achieved_targets: [Number=0, Number=0, Number=0, Number=0],  //List Index reperesents Week number
  finished: Boolean
});

module.exports = monthSchema;
