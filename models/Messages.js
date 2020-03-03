const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  messageBody: {
    type: String
  }
});

module.exports = mongoose.model("Messages", messageSchema);