import { useState } from "react";

// 화살표함수 사용
const Counter = () => {
  const [number, setNumber] = useState(0); // number - 0 으로 초기화

  const increase = () => {
    setNumber(number + 1);
  };

  // 인자로 msg받아줌
  const alertMsg = (msg) => {
    alert(`${msg}~~ 현재 number state는 ${number}입니다.`); // 현재숫자를 보여줌
  };

  // 인자로 event와 msg 둘 다 받아줌
  const consoleMsg = (e, msg) => {
    console.log(`${msg}~~ 현재 number state는 ${number}입니다.`);
    console.log(e.target);
  };

  // click과 관련된 함수도 event를 받아줌
  const handleClick = (e) => {
    console.log("================");
    console.log(e.target); // span, 실제로 눌리고 있는 곳
    console.log(e.currentTarget); // button, 이벤트가 발생되는 곳
  };
  // 4개의 함수를 선언한 후 return으로 사용해줌
  return (
    <div>
      <h3>number counter</h3>
      <h5>{number}</h5>
      <button onClick={increase}>더하기</button>
      <button onClick={() => alertMsg("안녕하세요")}>alert 출력</button>
      {/* alert는 전달할 인자가 있어야됨 -> 화살표 함수 사용으로 인자 넣어줌 */}
      <button
        onClick={(e) => {
          consoleMsg(e, "hello");
        }}
        // Event객체만 전달해주는거면 함수 이름만 적어도 되는데, 함수에서 msg라는 문자열도 보내주고 있기 때문에 화살표 함수를 이용해야한다.
        // msg에 hello가 들어감
      >
        console 확인
      </button>
      <button onClick={handleClick}>
        {/* 다른 인자 없이 event인자만 전달해 주고있기 때문에 함수 이름만 적어줌 */}
        <span>handleClick</span>
      </button>
    </div>
  );
};
export default Counter;
