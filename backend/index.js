require("dotenv").config();

const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const mainRouter = require("./src/routers/main");

const PORT = process.env.PORT || 8000;
const mongoString = process.env.DATABASE_URL;
const server = express();
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'public')));

const logger = morgan(
  ":method :url :status :res[content-length] - :response-time ms"
);
// Connect to MongoDB database
mongoose.connect(mongoString, { useNewUrlParser: true });
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

server.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

// first router
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost",
    "http://localhost:8080",
    "https://rent-backend.vercel.app",
  ],
  allowedHeader: "x-access-token",
  method: ["GET", "POST", "PATCH", "DETELE", "OPTIONS"],
};

server.use(cors(corsOptions));
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(express.json());
server.use(logger);
// server.use(express.static("public/img/users"));
// server.use(express.static("public/img/vehicles"));
server.use(mainRouter);
