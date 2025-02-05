const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = 8080;
/* middleware */
app.set("view engine", "ejs");

/* api */
app.get("/", (req, res) => {
  res.render("talk");
});

/* socket */
io.on("connection", (socket) => {
  console.log("connected! >>", socket.id, socket.rooms);
  /* [실습3] 입장1 */
  // 나를 제외한 모든 클라이언트에게 입장공지문 발송
  socket.broadcast.emit("notice", `${socket.id}님이 입장하셨습니다.`);

  // [4-2] 메세지를 하나의 클라이언트에게 받아서
  // 전체 클라이언트에게 전달
  socket.on("send", (msg) => {
    console.log(`${socket.id}:${msg}`);
    io.emit("message", { id: socket.id, message: msg });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
