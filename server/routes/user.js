const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../models/userSchema");
const router = express.Router();

const User = mongoose.model("User", userSchema);

router.post('/user', async (req, res) => {

    const { googleId, name, email, imageUrl } = req.body

    const user = await User.findOne({ googleId: googleId }).exec();

    const payload = {googleId: googleId, name: name, email: email, imageUrl: imageUrl};

    if (user) {

        user.updateOne(payload);

        res.json({
            message: "User updated successfully"
        })

    } else {
        await User.create(payload);
        res.json({
            message: "Success"
        })
    }
})

module.exports = router;