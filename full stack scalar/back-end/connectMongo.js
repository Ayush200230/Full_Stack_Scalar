const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect("mongodb+srv://ayush:ayush@cluster0.nss6zj4.mongodb.net/");
};

module.exports = connectToDatabase;
