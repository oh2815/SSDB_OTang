import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../store/module/bankReducer";

import { useState } from "react";

export default function Bank() {
  const [inputNumber, setInputNumber] = useState(0);
  // rootReducer에다가 bank를 선언해 주었기에 사용 가능
  const balance = useSelector((state) => state.bank);
  console.log("잔액", balance);

  const dispatch = useDispatch();
  return (
    <div>
      <p>현재 잔고: {balance.toLocaleString()}원</p>
      <input
        type="number"
        value={inputNumber}
        step={10000} // 10000씩 올라감
        onChange={(e) => setInputNumber(Number(e.target.value))}
        // 글자가 바뀌면 inputNumber에다가 바뀐 글자값을 설정할 수 있도록 설정
        // reducer에서 보내주는 payload값은 무조건 숫자값인데 input.value값은 무조건 문자열이기 때문에 Number함수써서 치환
      />
      {/* 함수를 만들어줬기에 함수 호출해서 사용
      deposit이나 withdraw를 호출 해주면 객체가 return이 되는데 이 때 payload가 undefined이 뜨므로, 인자로 숫자를 받아줘야함
      ---> 아무 숫자가 아닌 input에 작성된 숫자값을 받아와야함 ---> input을 관리해주는 state를 하나 만들어줌 
      ---> ref나 state 아무거나 해도됨 ---> useState사용 ( 선언해주고, input에 onChange걸어줌 */}
      <button onClick={() => dispatch(deposit(inputNumber))}>입금</button>
      <button onClick={() => dispatch(withdraw(inputNumber))}>출금</button>
    </div>
  );
}
