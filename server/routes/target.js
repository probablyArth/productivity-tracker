const express = require('express');
const mongoose = require('mongoose');
const monthSchema = require('../models/monthSchema');
const router = express.Router();

const Month = mongoose.model("Month", monthSchema);

router.post("/target", async (req, res) => {

    const { googleId, date, achieved_targets, comments, updated } = req.body;

    const actualDate = new Date(Date.parse(date));
    const identifier = `${actualDate.getMonth()}${actualDate.getYear()}`;

    const month = await Month.findOne({identifier: identifier, googleId: googleId});

    month.achieved_targets = achieved_targets;
    month.comments = comments
    month.updated = updated
    month.save();

    res.json({message: 'success'})
})

module.exports = router