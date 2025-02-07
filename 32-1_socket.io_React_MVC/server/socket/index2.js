const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  const nickInfo = {}; //{socket.id:nickname}
  io.on("connection", (socket) => {
    console.log(socket.id);
    // [chatting1.jsx]
    // io.emit("notice", nickInfo[socket.id] + "님이 입장했습니다.");

    // [chatting2.jsx]
    // 닉네임사용2. 닉네임 중복체크 후 사용가능한 닉네임일 때 nickInfo에 추가
    socket.on("checkNick", (nickname) => {
      if (Object.values(nickInfo).includes(nickname)) {
        //  닉네임이 nickInfo 에 존재하는 경우 (닉네임 중복)
        socket.emit("error", "이미 존재하는 닉네임 입니다.");
      } else {
        // 닉네임이 nickInfo에 존재하지 않는 경우 (중복x, 사용 가능)
        nickInfo[socket.id] = nickname; // {absdKDS13r: "allie", .. }

        // 중복되지 않는 닉네임 클라이언트로 전달
        socket.emit("entrySuccess", nickname);

        // 입장 성공시 입장메세지 보내기
        io.emit("notice", nickInfo[socket.id] + "님이 입장했습니다.");
      }
    });
    socket.on("disconnect", () => {
      io.emit("notice", nickInfo[socket.id] + "님이 퇴장했습니다.");
      delete nickInfo[socket.id]; // 객체에서 제거
    });
  });
}

module.exports = socketHandler;
