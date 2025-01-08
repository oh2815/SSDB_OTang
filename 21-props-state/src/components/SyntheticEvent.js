export default function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log(e);
    console.log("합성이벤트 클릭!");
  }

  function printinput(e) {
    console.log(e.target.value);
    //target은 input 태그
  }

  function callTest() {
    alert("안녕하세요?");
  }
  return (
    <div>
      <button onClick={syntheticEvent}>콘솔을 보세오</button>
      {/* <button onClick={callTest()}>함수 호출해서 전달</button> */}
      <br />
      <input
        type="text"
        placeholder="글자를 입력하세요."
        onChange={(e) => {
          printinput(e);
        }}
      />
      {/* 화살표함수면 안에서 호출 해줘야 함, 이벤트객체 e도 해줘야됨 */}
    </div>
  );
}
