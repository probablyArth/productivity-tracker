const express = require("express");
const mongoose = require("mongoose");
const monthSchema = require("../models/monthSchema");
const router = express.Router();

const Month = mongoose.model('Month', monthSchema)
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

router.get('/month', async (req, res) => {

    const date = req.query.date;
    const googleId = req.query.googleId;

    const actualDate = new Date(Date.parse(date))
    
    const identifier = `${actualDate.getMonth()}${actualDate.getYear()}`;
    console.log(identifier, googleId)
    const month = await Month.findOne({identifier: identifier, googleId: googleId}).exec();

    if (month) {
        res.json(month);
    } else {    
        res.json({message: 'Month not found'})
    }

})

router.post('/month', async (req, res) => {
    
    const { googleId, date, unit, goal, expected_targets, achieved_targets, finished} = req.body;

    const actualDate = new Date(Date.parse(date));
    const identifier = `${actualDate.getMonth()}${actualDate.getYear()}`;

    const payload = { 
        googleId: googleId, 
        date: actualDate,
        unit: unit, 
        goal: goal, 
        expected_targets: expected_targets, 
        achieved_targets: achieved_targets, 
        finished: finished,
        identifier: identifier
    };

    const month = await Month.findOne({identifier: identifier, googleId: googleId}).exec();


    if (month) {
        res.json({message: "Month plan already registered"})
    } else {
        await Month.create(payload);
        res.json({message: "Success"});
    }

})


module.exports = router;