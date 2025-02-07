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

    socket.on("checkNick", (nickname) => {
      if (Object.values(nickInfo).includes(nickname)) {
        socket.emit("error", "이미 존재하는 닉네임 입니다.");
      } else {
        nickInfo[socket.id] = nickname;
        socket.emit("entrySuccess", nickname);
        io.emit("notice", nickInfo[socket.id] + "님이 입장했습니다.");
        // 입장성공시 해당 클라이언트에게 전체 user 정보 넘겨줌
        io.emit("updateNicks", nickInfo);
      }
    });
    socket.on("disconnect", () => {
      io.emit("notice", nickInfo[socket.id] + "님이 퇴장했습니다.");
      delete nickInfo[socket.id];
    });

    // 하나의 클라이언트에게 메세지를 받고
    // 전체클라이언트 혹은 DM을 보내고자 하는 클라이언트에게
    // 받은메세지 전송
    socket.on("send", (msgData) => {
      // msgData:{myNick, dmTo:socket.id, msg}
      if (msgData.dmTo === "all") {
        io.emit("message", {
          nick: msgData.myNick,
          message: msgData.msg,
          isDm: false,
        });
      } else {
        // dm 일 때 DM 클라이언트에게만 보이도록
        io.to(msgData.dmTo).emit("message", {
          nick: msgData.myNick,
          message: msgData.msg,
          isDm: true,
        });
        // dm 일 때 나에게 보이도록
        socket.emit("message", {
          nick: msgData.myNick,
          message: msgData.msg,
          isDm: true,
        });
      }
    });
  });
}

module.exports = socketHandler;
