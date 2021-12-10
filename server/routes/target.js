const express = require('express');
const mongoose = require('mongoose');
const monthSchema = require('../models/monthSchema');
const router = express.Router();

const Month = mongoose.model("Month", monthSchema);

router.post("/target", async (req, res) => {

    const { googleId, date, achieved_targets } = req.body;

    const month = await Month.findOne({date: date, googleId: googleId});

    month.achieved_targets = achieved_targets;
    month.save();
})

module.exports = router