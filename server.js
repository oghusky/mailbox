require("dotenv").config();

const express = require("express"),
  PORT = 5000 || process.env.PORT,
  app = express();

app.get((req, res) => {
  res.send("hello")
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})