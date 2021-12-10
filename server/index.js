const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");

require("dotenv").config();

// Import routes

const month = require('./routes/month');
const target = require('./routes/month');
const user = require('./routes/month');

const URI = "mongodb://localhost:27017/productivity-tracker";
console.log(URI);

mongoose.connect(URI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());

// Use Routers

app.use(month);
app.use(target);
app.use(user);

