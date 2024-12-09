const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/set-coockie", (req, res) => {
  res.send("쿠키 생성 성공");
});
