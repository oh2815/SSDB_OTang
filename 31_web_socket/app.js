// npm i ejs express ws
const express = require("express");
const ws = require("ws"); // ws 모듈 불러오기 ( websocket 사용을 위해 )
const app = express();
const PORT = 8080;

// 미들웨어 설정
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

// 반환값이 있기때문에 server에 저장을 해둠
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// console.log("server"); // app.listen의 리턴값은 : 서버 객체

// 연결된 client마다 고유한 ID를 가지기 위해 generateUniqueID()함수 생성
function generateUniqueId() {
  // Date.now() : 1970년 1월 1일부터 지금까지의 밀리초 반환
  // toSrting : 문자열로 변환.(36)이면 36진수로 반환한다는 뜻
  const timestamp = Date.now().toString(36);
  console.log("timestamp", timestamp); // timestamp m6ool5in

  //  Math.random() : 0 ~ 1 사이 반환
  const randomString = Math.random().toString(36).substring(2);
  console.log("randomString", randomString); // randomString p5etvpwmwcm

  // 실시간이므로 미리초까지 생각해서 조금 더 고유한 ID를 생성하기 위해 두가지를 더해줌
  return timestamp + randomString;
}
// console.log("id", generateUniqueId());
// console.log("abcdef".substring(2)); // cdef // 2번부터 끝까지 반환
// console.log("abcdef".substring(2, 5)); // cde // 2번부터 5번 전까지 반환

const sockets = [];
const wsServer = new ws.Server({ server }); //  ({server:server})
/* 
ws 모듈 이벤트
- connection : 클라이언트와 웹소켓 서버가 연결 되었을 때
- message : 클라이언트에게 메세지를 받았을 때
- error : 연결중 오류
- close : 클라이언트와 연결 종료
*/
// connection이라는 이벤트 걸어주고, socket에 socket정보가 담아져서 들어옴
wsServer.on("connection", (socket) => {
  // console.log(socket); // 연결될 하나의 클라이언트에 대한 정보

  // 연결된 client마다 고유한 ID를 가지기 위해 generateUniqueID()함수 생성
  const clientId = generateUniqueId();
  console.log(`클라이언트 id: [${clientId}] 연결됨`);
  sockets.push(socket); // push를 통해서 접속한 클라이언트 socket을 위에 선언해둔 빈배열에 추가

  // socket : client
  socket.on("message", (message) => {
    // -> client에게 메세지가 온다면 ~ 어떤 작업을 할지 적어주면 됨.
    // server에서 받아주는 message는 버퍼 객체
    // console.log(message); // <Buffer ec b1 84 ed 8c 85 eb b0 a9 20 ec 9e 85 ec 9e a5 7e 21> message는 문자열
    // console.log(message.toString());
    // message에 toString 옵션을 걸어줄 수 있는데 이러면 client에서주는 문자열이 나오게됨.
    // toString을 쓰지않고 백틱을 열어서 받아주게 되면 message.toString() 암시적으로 호출을 하게되므로, client에서 주는 문자열을 받을 수있다.
    console.log(`${clientId} 에게 받은 메세지 : ${message}`); // 채팅방 입장~! // message.toString() 암시적으로 호출

    // 현재 연결된 소켓(client 1개 : 접속한 당사자)에게만 message 보내는 것
    // socket.send("안녕하세오");

    // 연결된 모든 클라이언트에게 보내는 것 - forEach로 반복문 돌려줌
    // sockets라는 배열에 client가 들어올 때마다 저장을 해주고 있음
    // 특정 client가 보내는 message를 전체 client에게 보내주면 됨 ( 실시간 채팅방처럼 )
    sockets.forEach((client) => {
      // client는 forEach 에서만 사용하는 변수이므로 다르게 해줘도 됨
      client.send(`${message}`);
      // forEach로 돌려서 client에게 저장함. -> .send로 `{message}`전달 // 그냥 message 아님.
      // .send로 보냈으므로 client에서의 message의 data에 담겨져셔 들어올 것이다.
      // 확인은 창 두개 띄워놓고 채팅하는것 처럼 하면 콘솔에서 확인 가능
    });
  });
});
