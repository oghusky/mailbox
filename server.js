require("dotenv").config();

const express = require("express"),
  PORT = 5000 || process.env.PORT,
  app = express();

app.get("/", (req, res) => {
  res.send("trying to build a mailbox");
});

app.use("/messages", require("./routes/messageRoutes"));
app.use("/users", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})