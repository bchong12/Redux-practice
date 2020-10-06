const express = require("express");

const app = express();

app.use(express.json());
app.get("/api/data", (req, res) => {
  res.send({
    message: "This is a message from my server. Is axios working?",
  });
});

app.listen(5000);
