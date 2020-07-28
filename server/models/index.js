const config = require("../../config/");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = config.databaseUrl;

db.Acronym = require("./acronym.model.js")(mongoose);

module.exports = db;