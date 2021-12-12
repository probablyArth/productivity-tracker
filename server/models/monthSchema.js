const mongoose = require("mongoose");

const monthSchema = new mongoose.Schema({
  googleId: String,
  date: Date,
  goal: String,
  unit: String,
  identifier: String,
  expected_targets: Array,
  achieved_targets: {type: Array, 'default': [0, 0, 0, 0]},  //List Index reperesents Week number
  finished: Boolean,
  comments: {type: Array, 'default': ['', '', '', '']},
  updated: {type: Array, 'default': [false, false, false, false]}
});

module.exports = monthSchema;
