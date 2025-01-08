import ChangeObj from "./ChangeObj"; // 필요한 경우 경로 변경
export default function PororoObj() {
  const pororoObjArr = [
    {
      name: "뽀로로",
      age: "7",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "5",
      nickName: "공주님",
    },
    {
      name: "크롱",
      age: "4",
      nickName: "장난꾸러기",
    },
  ];
  return (
    <div>
      {" "}
      <ChangeObj objArr={pororoObjArr} />{" "}
    </div>
  );
}
