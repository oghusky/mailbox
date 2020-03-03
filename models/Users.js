const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  created: {
    type: Date,
    default: Date.now()
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Messages"
    }
  ]
});

module.exports = mongoose.model("Users", userSchema);