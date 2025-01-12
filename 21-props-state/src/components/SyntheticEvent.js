export default function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log(e);
    console.log("합성이벤트 클릭!");
  }

  function printinput(e) {
    console.log(e.target.value);
    //target은 Event가 걸리고있는 input 태그
    // input에 입력되는 값을 보고싶으면 value까지 넣으면 됨.
  }

  function callTest() {
    alert("안녕하세요?");
  }
  return (
    <div>
      <button onClick={syntheticEvent}>콘솔을 보세오</button>
      {/* Event 함수인경우 onClik에 화살표 함수를 굳이 사용하지 않아도 자동으로 Event 객체를 전달함 */}
      {/* Event매개변수를 받아주고 있는경우에는 자동으로 매개변수를 전달해주고있기 때문에 그냥 사용해도 됨. */}
      {/* <button onClick={callTest()}>함수 호출해서 전달</button> */}
      {/* 위와 같은 경우에는 렌더링이 될 때바로 결과값이 전달 된다. 렌더링이 돼서 결과값이 전달 된후, 다시 버튼을 눌러도 실행이 되지않는다.*/}
      <br />
      <input
        type="text"
        placeholder="글자를 입력하세요."
        onChange={(e) => {
          printinput(e);
          // 화샇표 함수를 전달해야하는 상황이면 화살표함수의 인자로 Event를 받아야 Event객체를 전달 할 수가 있다.
        }}
      />
      {/* 화살표함수면 안에서 호출 해줘야 함, 이벤트객체 e도 해줘야됨 */}
    </div>
  );
}
