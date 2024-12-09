const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models/index");
// console.log(db); //{sequelize, Sequelize, Player, ..}
// const { sequelize } = db;
// set middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router 설정
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db 연결 성공");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("db connerction err", err);
  });
