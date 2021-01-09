const mongoose = require("mongoose");
const config = require("config");

const connectDB = environment => {
  try {
    mongoose.connect(config.get(environment), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Connected to mongoose database");
  } catch (error) {
    console.log(`Error in connecting to db : ${error}`);
  }
};

module.exports = connectDB;
