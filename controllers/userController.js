const Users = require("../models/Users");

exports.createUser = (req, res) => {

}
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find()
    res.status(200).send(users);
  } catch (err) {
    if (err) throw err;
  }
}