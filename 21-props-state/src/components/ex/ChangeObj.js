import { useState } from "react";

export default function ChangeObj({ objArr }) {
  console.log("확인", objArr);
  const [Member, setChangeMember] = useState(0);

  const changeMember = () => {
    setChangeMember(Member === objArr.length - 1 ? 0 : Member + 1);
  };
  return (
    <div>
      <p>이름: {objArr[Member].name}</p>
      <p>나이: {objArr[Member].age}</p>
      <p>별명: {objArr[Member].nickName}</p>
      <button onClick={changeMember}>멤버 바꾸기</button>
    </div>
  );
}
