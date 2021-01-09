const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  number: {
    type: String,
    require: true
  },
  loggedin: {
    type: Boolean,
    default: true
  },
  friends: [],
  profile_picture: {
    type: Buffer,
    contentType: String
  }
});

module.exports = User = mongoose.model("user", UserSchema);
