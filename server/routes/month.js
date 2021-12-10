const express = require("express");
const mongoose = require("mongoose");
const monthSchema = require("../models/monthSchema");
const router = express.Router();

const Month = mongoose.model('Month', monthSchema)

router.get('/month', async (req, res) => {

    date = req.query.date;

    const month = await Month.findOne({date: date}).exec();

    if (month) {
        res.json(month);
    } else {    
        res.json({message: 'Month not found'})
    }

})

router.post('/month', async (req, res) => {
    
    const { googleId, date, unit, goal, expected_targets, achieved_targets, finished } = req.body;

    const payload = { 
        googleId: googleId, 
        date: date, 
        unit: unit, 
        goal: goal, 
        expected_targets: expected_targets, 
        achieved_targets: achieved_targets, 
        finished: finished
    };

    const month = await Month.findOne({date: date, googleId: googleId}).exec();

    if (month) {
        res.json({message: "Month plan already registered"})
    } else {
        await Month.create(payload);
        res.json({message: "Success"});
    }

})


module.exports = router;