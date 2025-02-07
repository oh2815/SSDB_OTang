const express = require("express");
const http = require("http");
const cors = require("cors");
// const socketIO = require("socket.io"); >> 이동
// const socketHandler = require("./socket/index1"); // 추가
// const socketHandler = require("./socket/index2"); // 추가
const socketHandler = require("./socket/index3"); // 추가
const indexRouter = require("./routes");
const PORT = 8080;

const app = express();
const server = http.createServer(app);
// const io = socketIO(server); >> 이동
socketHandler(server); // 추가

app.use(cors());
const prefix = "/api";
app.use(prefix, indexRouter);

server.listen(PORT, () => {
  console.log("server is open!! Port is", PORT);
});
