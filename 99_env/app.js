const express = require("express");
const app = express();
// console.log(process.env);
console.log("db pw ", process.env.DB_PASSWORD);
const dotenv = require("dotenv");
dotenv.config;
const PORT = process.env.PORT;
console.log("PORT name", PORT);

app.get("/", (req, res) => {
  res.send("get");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.lidten(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
