import { useEffect, useState } from "react";

// number를 인자로 줘서 mount, unmount, update를 볼 예정
const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  /* 
    useEffect(ettect[, dependency_array])
    - effect : 콜백함수
    - dependency_array(의존성 배열):
    의존성 배열에 있는 데이터가 변한면 콜백 함수 실행
      - [] : 빈배열 : Mount 되었을 때만 동작
      - 생략: Mount, Update시 언제나 동작
      - [data] : Mount,data가 update되었을 때 동작 ( data 여러개 쓸 수있다. )
    */
  // Mount 시점에서 실행 ( dependency_array가 빈배열 )
  useEffect(() => {
    console.log("함수형 컴포넌트 MOUNT!!!");
  }, []);

  // Unmount 시점에서 실행. + (mount 시점에 실행)
  // mount 와 합쳐서 사용해도 상관 없음
  // return 위에 쓰면 mount시점에서 작동되는 것이고, return 아래에쓰면 unmount시점에서 작동된다. -> 같은 함수 안에 써도 상관 없다는 얘기
  useEffect(() => {
    return () => {
      console.log("함수형 컴포넌트 UNMOUNT!!!");
    };
  }, []);

  // Update시점에서 실행 -> dependency_array를 아예 안써도되고(빈배열 아님), data를 넣어서 써도된다.
  // dependency attay 에 아무것도 안써도 상관 없음
  // text, number 스테이트가 바뀔 때 모두 실행됨
  useEffect(() => {
    console.log("함수형 컴포넌트 UPDATE!! 될 때마다");
  });

  // 특정 state 업데이트 ( data가 바뀔 때만.. )
  // text를 data로 넣었으니 text가 바뀔 때에만 함수가 실행된다.
  useEffect(() => {
    console.log("함수형 컴포넌트 UPDATE!! text 변경");
  }, [text]);
  return (
    <>
      <p>MyComponent: {number}</p>
      {/* onChange가 일어날 때마다 input창에 적은 value값으로 바꿔줘라! */}
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
      {/* 위의 Mycomponent에 number를 인자로 주었기에, 여기서도 number를 사용 가능. */}
      {visible && <MyComponent number={number} />}
    </>
  );
};
export default LifeCycleFunc;
