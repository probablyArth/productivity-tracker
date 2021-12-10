const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");
require("dotenv").config();

const URI = "mongodb://localhost:27017/productivity-tracker";
console.log(URI);

mongoose.connect(URI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});

const todosRoutes = require("./routes/todos");
const userRoutes = require("./routes/user");

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());

