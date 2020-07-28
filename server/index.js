const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const morgan = require('morgan');
const path = require('path');

// const acronyms = require("./dummyData.json");

const app = express();

const { registerRoutes } = require('./routes');

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'build')));

registerRoutes(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to g2i application." });
});

module.exports = app;
