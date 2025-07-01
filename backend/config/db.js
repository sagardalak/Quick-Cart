const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/Quickcart");
    console.log("MongoDB connected:", connect.connection.host);
  } catch (e) {
    console.log("MongoDB connection error:", e.message);
  }
};

module.exports = connectdb;
