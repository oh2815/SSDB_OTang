export default function Input({ setData }) {
  //   console.log(setData); // 함수 타입이 나옴
  //    {setData}
  //    ƒ dispatchSetState(fiber, queue, action) {
  //     {
  //         if (typeof arguments[3] === 'function') {
  //           error("State updates from the useState() and useReducer() Hooks don't support the " + 'sec…

  // 내용을 입력 할 떄마다 실시간으로 , (변경이 일어날 떄마다) state값을 변경 하기 위해 onChange를 걸어줌
  const handleChange = (evt) => {
    // setData를 이용해서 state를 바꿀 예정
    /* 
      원래 state
        {
            fruit: "apple",
            background: "white",
            color: "black",
            content: "디폴트",
          }
          */
    // console.log("target", evt.target); // evt가 발생한 요소
    // console.log("ctarget", evt.currentTarget); // evt를 등록한 요소
    // 지금은 input 한개밖에 없기 때문에 둘 다 input으로 동일하게 input값이 나온다.
    // 여기서 입력걊을 선택하기 위해서는 둘 중 하나에 .value를 붙여주면 된다.
    //-------------------------------------------------------------------------//
    /* 
    - content만 바꾸겠다고 setData안에다가 content만 써버리면 다른 data들을 불러올 수 없다.
    - 그래서 다른 data들도 이전상태를 유지 해줘야한다.
    - 근데 여기서 data값을 받아오고 있지 않기에 이전 상태의 state값을 모름. 
    - 그래서 prevState라는 함수를 인자로 써준다.이렇게 받아준 prevState는 위에 주석처리해준 원래 state랑 값이 동일하다.
    - 위 객체(원래 state)에다가 content값만 바꿔준다.
    - 바꿀 때, fruit : prevState.fruit .. 이런식으로 받아줘도 되는데 전개연산자를 통해서 원래state를 펼쳐서 prevSate에 가져와 준다.
    - ...prevState뒤에 content를 써줬기 때문에 content값만 덮어 써지고 나머지 data들은 그대로 와진다
    - 여기서 input에 들어오는 값 그대로 content에 나타나져야 하기 때문에  handleChange값에 evt인자를 받아주고
      evt.target.value값(input 입력값 그 자체)을 넣어준다.
    */
    setData((prevState) => {
      return { ...prevState, content: evt.target.value }; // 전개연산자 ... 많이 사용됨
    });
  };
  return (
    <div>
      내용:{" "}
      <input
        type="text"
        placeholder="내용을 입력하세요."
        // 내용을 입력 할 떄마다 실시간으로 , (변경이 일어날 떄마다) state값을 변경 하기 위해 onchange를 걸어줌
        onChange={handleChange}
      />
    </div>
  );
}
