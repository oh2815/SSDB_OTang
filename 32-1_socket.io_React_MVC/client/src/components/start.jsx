import { useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Start() {
  const inSocketConnect = () => {
    // console.log(socket.connected);
    if (!socket.connected) socket.connect(); // 소켓과 접속
  };

  useEffect(() => {
    inSocketConnect();

    socket.emit("test", "테스트");
    socket.on("test2", (str) => {
      console.log("서버에서 온 메세지", str);
    });
  }, []);

  return <p>테스트입니다</p>;
}
