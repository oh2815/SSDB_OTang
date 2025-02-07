import { useEffect, useState } from "react";
import "../style/chatting.css";
import Notice from "./Notice";
import SpeechChat from "./SpeechChat";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Chatting() {
  const initSocketConnect = () => {
    if (!socket.connectd) socket.connect();
  };
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "me",
      content: "내가 보낸 메세지",
    },
    {
      type: "other",
      content: "다른 사람이 보낸 메세지",
    },
    {
      type: "notice",
      content: "공지사항 메세지(입장, 퇴장)",
    },
  ]);

  useEffect(() => {
    initSocketConnect();

    // 소켓에게 test라는 이벤트에는 어떤함수가 동작할 것인지 말해줘야 함!!
    /* socket.on("이벤트", handler);
     - 특정 이벤트가 발생할 때마다 실행될 함수를 등록
     - "이벤트" 가 발생할 때마다 등록된 handler를 실행시킨다.
     - socket.on을 여러번 발생시키면 handler가 여러번 등록됨 
       >> 중복실행가능성이 있기 때문에 중복 등록은 지양한다.
     */

    // [문제점1]: newChatList 를 만들 때 chatList가 mount된 시점의 chatList!!
    /*     const noticeHandler = (notice) => {
      const newChatList = [
        ...chatList, //  << **(요소가 쌓이지 않는) 문제의 이유.. 
        // 항상 초기chatList 배열 chatList.length=3,
        // why? 등록한 당시의 chatList를 계속 사용하기 때문!
        { type: "notice", content: notice }, // 항상 4번째 요소가 됨
      ];
      setChatList(newChatList);
    };

    socket.on("notice", noticeHandler); */
  }, []);

  useEffect(() => {
    // chatList가 변경될 때마다 이벤트핸들러 재등록
    // 기존 chatList가 기준이 아닌 변경된 chatList가 기준이 될 수 있도록
    // [해결1], [문제점2] 이벤트 핸들러 재등록
    const noticeHandler = (notice) => {
      const newChatList = [
        ...chatList, // 변경된
        { type: "notice", content: notice },
      ];
      setChatList(newChatList);
    };
    console.log("이벤트 등록");
    socket.on("notice", noticeHandler);

    /* [해결2] */
    // 클린업함수를 통해 useEffect가 다시 실행될 때 이벤트 핸들러를 해제한다.
    // (unmount 뿐만 아니라 useEffect 가 다시 실행되기 직전에도 실행)
    return () => {
      console.log("이벤트 해제");
      socket.off("notice", noticeHandler);
    };
  }, [chatList]);

  // 메세지 전송시 사용되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 막기
  };

  return (
    <>
      <ul>
        <li>채팅 UI 만들기(실습2)</li>
        <li>입장 공지(실습3)</li>
      </ul>

      <div>
        <div className="container">
          <header>코코아톡🍫</header>
          <section>
            {chatList.map((chat, key) =>
              chat.type === "notice" ? (
                <Notice chat={chat} key={key} />
              ) : (
                <SpeechChat chat={chat} key={key} />
              )
            )}
          </section>
          <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
            {/* <select id="dm-select"></select> */}
            <input
              type="text"
              placeholder="메세지 입력"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button>전송</button>
          </form>
        </div>
      </div>
    </>
  );
}
