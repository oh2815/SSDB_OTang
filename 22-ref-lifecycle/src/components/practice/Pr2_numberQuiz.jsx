import { useEffect, useRef, useState } from "react";

export default function Pr2_numberQuiz() {
  const [operate, setOperate] = useState();
  const number1 = Math.floor(Math.random() * 11);
  const number2 = Math.floor(Math.random() * 11);
  const inputRef = useRef();
  const randomOper = Math.floor(Math.random() * 3);
  useEffect(() => {
    if (randomOper == 0) {
      setOperate("+");
    } else if (randomOper == 1) {
      setOperate("-");
    } else {
      setOperate("x");
    }
    console.log(typeof randomOper);
    console.log(randomOper);
  }, []);

  const submitAnswer = () => {
    let Result = 0;
    if (operate == "+") {
      Result = number1 + number2;
    } else if (operate == "-") {
      Result = number1 - number2;
    } else {
      Result = number1 * number2;
    }

    const inputAnswer = Number(inputRef.current.value);
    if (Result == inputAnswer) {
      alert("정답입니다.");
    } else {
      alert(`틀렸습니다. 정답은${Result}입니다.`);
    }
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <>
      <span>{number1}</span>
      <span>{operate}</span>
      <span>{number2}</span>
      <br />
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={submitAnswer}>정답 제출</button>
    </>
  );
}
