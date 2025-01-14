import { useRef, useState } from "react";

// DOM요소 선택하기 위한 ref
export function RefFunc1() {
  // 1. ref 객체 만들기
  const inputRef = useRef();

  //3. ref.current에 접근해서 원하는 작업 진행
  const handleFocus = () => {
    console.log(inputRef.current); // input 선택됨
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <div>
      {/* 2. 선택하고 싶은 태그에 ref 전달하기 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </div>
  );
}

// 변수 처럼 사용하는 Ref
export function RefFunc2() {
  const ref = useRef(1);
  const [state, setState] = useState(1);
  let variable = 1; //  함수가 재렌더링이 되면 초기화 됨 ==> 화면에서 변경된 값 볼 수 없다

  const plusRef = () => {
    // rendering시 바뀜
    // 누르면 1이 막 증가하다가 밑에 state 버튼을 눌러서 재렌더링이되는 순간 숫자가 변경됨
    ref.current += 1;
    console.log("ref.current", ref.current);
  };

  // 32번부터 57번까지 재렌더링 됨
  const plusState = () => {
    //  화면도 변경됨
    // state 가 변경된다 == re-rendering!!
    // == 함수(컴포넌트)가 다시 읽힌다.
    // == 변수(variable)는 기존 값으로 초기화되어 화면에 반영되지 않는다.
    setState(state + 1);
    console.log("state", state);
  };
  const plusVariable = () => {
    variable += 1;
    console.log("variable", variable);
  };
  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>Plus ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>Plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusVariable}>Plus variable</button>
    </div>
  );
}
