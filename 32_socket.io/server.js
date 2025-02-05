const express = require("express");
const app = express();
const PORT = 8080;

// socket.io 의 소켓이 http 모듈로 생성된 서버에서만 동작하므로 모듈을 불러옴
const http = require("http");
const { emit } = require("process");

const server = http.createServer(app);
const io = require("socket.io")(server);

// 미들웨어 설정
app.set("view engine", "ejs");

// api
app.get("/", (req, res) => {
  res.render("client");
});

app.get("/practice1", (req, res) => {
  res.render("practice");
});

app.get("/chat-room", (req, res) => {
  res.render("rooms");
});

// socket 코드 작성
io.on("connection", (socket) => {
  //   console.log(socket);
  console.log("socket.id >>", socket.id); // socket.id >> DF8Tlm8D2bqIPjJDAAAF // connection 성공
  //--------------------------------
  // [on과 emit 사용해보기]
  // cb(콜백)이 emit으로 보내주는 역할 함
  // 1. client > server > client
  socket.on("event_name", (arg1, arg2, arg3, cb) => {
    console.log("[event_name]::", arg1, arg2, arg3);
    cb(arg1, arg2, arg3); // res1, res2, res3으로 전달
  });
  // 2. client > server
  socket.on("none_cb", (arg, cb) => {
    console.log("[cb_test]", arg); // [cb_test] 콜백이 없어요!
    console.log(cb); // emit에서 보내주는 콜백이 없으므로 undfined 확정
  });

  // 3-1. server > client, 클라이언트 전체에게
  io.emit("entire_client", "<< 앞에는 이벤트 이름 이거는 전체에 보내는 문자열");
  // 3-2. server > client, 클라이언트 하나에게
  socket.emit(
    "one_client",
    "<< 앞에는 이벤트 이름 이거는 하나에 보내는 문자열"
  );

  // ---------- 채팅 만들기! -----------
  // 1. 나의 메세지가 나에게만 보임
  socket.on("new_message1", (arg, cb) => {
    console.log("[new_message1]::", arg);
    cb(arg); // 나에게만 데이터를 전달
  });

  // 2. 나의 메세지가 나에게만 보임
  socket.on("new_message2", (arg2) => {
    console.log("[new_message2]::", arg2);
    io.emit("message_all_render", arg2);
  });

  // 실습
  socket.on("hello", (msg, cb) => {
    console.log("client: ", msg);
    cb(msg);
  });

  socket.on("study", (msg) => {
    console.log("client:", msg);
    socket.emit("study2", msg);
  });

  socket.on("bye", (msg) => {
    console.log("client:", msg);
    socket.emit("bye2", msg);
  });

  // ----- 방있는 채팅 -----
  //   console.log("socket.rooms", socket.rooms);
  // 방이 없을 때, {socket.id} 정보만 들어와있음
  //   console.log(socket.room); // undefined
  socket.on("join", (roomname) => {
    // 2. 서버에서 방열기
    // join(): 같은 방에 들어가있는 사람들끼리 통신할 수 있도록
    socket.join(roomname); // 방열기
    socket.room = roomname; // 다른 곳서도 roomname을 확인할 수 있도록 정보 추가
    // console.log("socket.rooms", socket.rooms);
    //  { 'hGbdCOOjZFhQJE6UAAAH', 'a' }

    // 3-1. 입장메세지 모두에게 보내기(server>client)
    // io.to(roomname).emit("userjoin", `[${socket.id}]님 입장`);
    // 3-2. 입장메세지 나를 제외하고 보내기(server>client)
    // broadcast: 내가 제외됨
    socket.broadcast.to(roomname).emit("userjoin", `[${socket.id}]님 입장`);
  });

  // 6. client > server, 전체 클라이언트에게 메세지 보내기
  socket.on("message", (msg) => {
    console.log("클라이언트의 메세지!", msg);

    // 내가 포함된 방? >> socket.room
    console.log("내가 포함된 방의 이름", socket.room);

    // 나포함 전체에게 메세지 전달
    io.to(socket.room).emit("message_toAll", msg, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
