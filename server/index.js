const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config();

const port = 4000;
const mongoose = require('mongoose')

// Import routes

const month = require('./routes/month');
const target = require('./routes/target');

const URI = process.env.URI;

mongoose.connect(URI, {
  dbName: 'productivity-tracker'
});

const db = mongoose.connection

app.use(cors({origin: '*'}));
app.use(express.json());

db.once("open", function () {
  app.listen(port,  () => {
    console.log(`App listening on port ${port}!`)
  });
})

// Use Routers

app.use(month);
app.use(target);