const router = require("express").Router();
const { getMessages } = require("../controllers/messageController");

router
  .route("/")
  .get(getMessages);

module.exports = router;