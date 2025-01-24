import { useRef, useState } from "react";

export default function SetText() {
  const refval = useRef(0); // 변수로 사용할 ref
  const refInput = useRef<HTMLInputElement>(null); // ref 객체를 이용해서 DOM 접근시 반드시 초기값 null 전달..필수 !

  //   const [text, setText] = useState<string>("");
  const [text, setText] = useState("");

  // refVal 변수를 변경하는 함수
  const changeRef = () => {
    refval.current += 1;
    console.log("refVal:", refval.current);
  };

  const changeState = () => {
    if (refInput.current) {
      console.log("text state 변경 완료");
      setText(refInput.current.value);
    }
  };

  const checkString = () => {
    console.log("state string", text);
    console.log("input value ref", refInput.current?.value);
  };
  return (
    <div>
      <h2>useRef & useState 사용해보기</h2>
      <input type="text" ref={refInput} />
      <br />
      <button onClick={changeState}>state 변경</button>
      <button onClick={changeRef}>ref +1</button>

      <p>state: {text} </p>
      <p>refVal: {refval.current}</p>
      <p>refInput의 value: {refInput.current?.value}</p>
    </div>
  );
}
