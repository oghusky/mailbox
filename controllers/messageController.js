const Users = require("../models/Users");

exports.getMessages = async (req, res) => {
  try {
    const users = await Users.find()
    res.status(200).send(users);
  } catch (err) {
    if (err) throw err;
  }
}
exports.messageForm = (req, res) => {
  res.send("message form");
}
exports.postMessage = (req, res) => {

}
exports.deleteMessage = (req, res) => {

}