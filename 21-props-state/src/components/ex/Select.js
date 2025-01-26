// setData받아주고, 부모 component(EntireComponent)에서 자식 component로 setData를 넘겨주면 됨.
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
          //----------------------------------------------------------------------//
          // - select가 바뀔 때 마다 기존 state data의 fruit라는 key를, selct의 option인 value값으로 변경을 해줌.
          // - data값이 이전에 작성된게 없기 때문에 prevState와 전개연산자를 통해서 이전의 state값을 그대로 유지시켜주고,
          //    그 뒤에 fruit값을 작성해서 fruit값을 덮어씌워준다.
          setData((prevState) => {
            // fruit의 key값을 e.targer.value값으로 바꿔준다.
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
          // 이전의 data를 알 수 없을 때 함수를 넣어서 전개연산자를 활용하면 되는것이 핵심.
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
