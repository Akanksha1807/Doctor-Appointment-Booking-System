const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log(
      `Database connected on  ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log("Mongo db server error :", error);
  }
};

module.exports = connectDB;
