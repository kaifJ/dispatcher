const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
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
