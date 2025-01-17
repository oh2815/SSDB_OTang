import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const func1 = () => {
    console.log("number: " + number);
  };

  const func2 = useCallback(() => {
    console.log(`number: ${number} 😊`);
  }, [number]);

  useEffect(() => {
    console.log("함수 1 변경");
  }, [func1]);
  // true false가 바뀌어도 함수가 랜더링이 되는이유 : Callback도 함수이기 떄문에 isTrue가 바껴도 func1이라는 함수가 재랜더링 됨

  useEffect(() => {
    console.log("함수 2 변경");
  }, [func2]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        call function
      </button>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </div>
  );
}
