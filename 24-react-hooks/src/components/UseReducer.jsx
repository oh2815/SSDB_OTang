// useReducer는 잘 안쓰이긴하지만 리덕스와 로직이 많이 유사하기때문에 잘 알아두는것이 좋음
import { useReducer, useState } from "react";
// reducer가 쓰이기 전에 만들어져 있어야 되기떄문에 Component밖에 뺴둠

// 상수화 해서 사용하는게 좋다
const BANK_ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

// dispatch의 요구사항인 action이 reducer의 두번째 인자로 들어온다.
// action={type, payload}
const reducer = (prevState, action) => {
  console.log("dispatch 함수가 호출 되면, reducer동작!!");
  console.log("prevState", prevState);
  console.log("action", action); // anything ( reducer의 두번째 인자)

  switch (action.type) {
    case BANK_ACTION_TYPES.deposit:
      return prevState + action.payload; // payload는 원하는 number값 // 반드시 return 해줘야 함
    case BANK_ACTION_TYPES.withdraw:
      return prevState - action.payload;
    default:
      return prevState;
  }
  return prevState;
  // reducer는 반드시 state를 return해줘야 함
};
export default function UseReducer() {
  const [number, setNember] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>useReducer 사용하기</h2>
      <p>현재 잔고: {money}원</p>
      <input
        type="number"
        value={number}
        step={1000}
        onChange={(e) => setNember(Number(e.target.value))}
        // Number씌워줘서 문자열에서 숫자형태로 바뀜
      />
      <br />
      <button
        onClick={() => {
          dispatch({ type: BANK_ACTION_TYPES.deposit, payload: number });
          // 안에 들어가는 인자들이 형태가 똑같아야 한다. 객체,, 키,, 숫자,,
        }}
      >
        예금
      </button>
      <button
        onClick={() =>
          dispatch({
            type: BANK_ACTION_TYPES.withdraw,
            payload: number,
          })
        }
      >
        출금
      </button>
    </>
  );
}
