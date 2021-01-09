const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  to: {
    type: mongoose.Types.ObjectId,
    ref: "user"
  },
  from: {
    type: mongoose.Types.ObjectId,
    ref: "user"
  }
});

module.exports = Message = mongoose.model("Message", MessageSchema);
