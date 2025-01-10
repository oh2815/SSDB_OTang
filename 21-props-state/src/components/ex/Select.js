export default function Select({ setData }) {
  /* 
    기존 state data
    {
    fruit: "apple",
    background: "white",
    color: "black",
    content: "디폴트",
  }
    */
  return (
    <div>
      {/*select 3개*/}
      과일 :{" "}
      <select
        onChange={(e) => {
          //   console.log("t", e.target);
          //   console.log("ct", e.currentTarget); // 둘 중 아무거나 사용해도 됨
          //   console.log("t", e.target.value); // 바꿀 때마다 사진바뀜
          setData((prevState) => {
            return { ...prevState, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색:
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, background: e.target.value };
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색:
      <select
        onChange={(e) => {
          const color = e.target.value;
          setData((prevState) => {
            return { ...prevState, color }; // 위에 const로 지정을 해줬기 때문에 그냥 사용 가능
            // 원래는 color:color로 해야되는게 맞는데 key값과 data의 이름이 같으면하나만 써도 됨
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </div>
  );
}
