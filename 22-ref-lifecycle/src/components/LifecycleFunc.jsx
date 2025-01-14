import { useEffect, useState } from "react";

const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  /* 
    useEffect(ettect[, dependency_array])
    - effect : 콜백함수
    - dependency_array(의존성 배열):
    의존성 배열에 있는 데이터가 변한면 콜백 함수 실행
      - [] : 빈배열 : Mount 되었을 때만 동작
      - 생략: Mount, Update시 언제나 동작
      - [data] : Mount,data가 update되었을 때 동작
    */
  // Mount 시점에서 실행
  useEffect(() => {
    console.log("함수형 컴포넌트 MOUNT!!!");
  }, []);

  // Unmount 시점에서 실행. + (mount 시점에 실행)
  // mount 와 합쳐서 사용해도 상관 없음
  useEffect(() => {
    return () => {
      console.log("함수형 컴포넌트 UNMOUNT!!!");
    };
  }, []);

  // Update시점에서 실행
  // dependency attay 에 아무것도 안써도 상관 없음
  // text, number 스테이트가 바뀔 때 모두 실행됨
  useEffect(() => {
    console.log("함수형 컴포넌트 UPDATE!! 될 때마다");
  });

  // 특정 state 업데이트
  useEffect(() => {
    console.log("함수형 컴포넌트 UPDATE!! text 변경");
  }, [text]);
  return (
    <>
      <p>MyComponent: {number}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </>
  );
};

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>plus</button>
      <button onClick={changeVisible}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};
export default LifeCycleFunc;
