import { useContext, useRef } from "react";
import { AgeContext } from "../context/AgeContext";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const ageContext = useContext(AgeContext);

  // - Provider로 감싸주지 않았을 때는 컨텍스트 값이
  //   createContext 메소드의 인자로 전달한 기본값으로 전달됨
  // - value로 값을 전달했다며느 해당 값이 전달됨
  const userContext = useContext(UserContext);

  console.log("ageContext", ageContext);
  console.log("userContext", userContext);

  const nameRef = useRef();
  const ageRef = useRef();

  const { name, setName } = userContext;
  const { age, setAge } = ageContext;

  const changeInfo = () => {
    setAge(Number(ageRef.current.value));
    setName(nameRef.current.value);
  };

  return (
    <>
      <div>
        <h3>사용자 프로필</h3>
        <p>이름: &lt; context에서 값 가져오기&gt;: {name}</p>
        <p>나이: &lt; context에서 값 가져오기&gt;: {age} </p>

        <input type="text" placeholder="이름 입력" ref={nameRef} />
        <input type="number" placeholder="나이 입력" ref={ageRef} />
        <br />
        <button onClick={changeInfo}>바꾸기</button>
      </div>
    </>
  );
}
