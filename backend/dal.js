const mongoose = require("mongoose");
const { User, Snippet } = require("./models/Schema");
mongoose.Promise = require("bluebird");

mongoose.connect("mongodb://localhost:27017/politicaldb");

function getUserById(userID) {
  return User.find({ _id: userID });
}
