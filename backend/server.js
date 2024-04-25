const express = require("express");
const mongo = require("mongo");
const cors = require("cors");
const errorHandler = require("./src/middleware/errorHandler");
const connectDb = require("./src/config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.SERVER_PORT || 5000;
connectDb();

//route
app.use(express.json());
app.use(cors());
app.use("/", require("./src/routes/routes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening to you boss ${port}`);
});

mongo.connect;
