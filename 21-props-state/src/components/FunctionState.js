import { useState } from "react";

export default function FunctionState() {
  // 2. state를 사용해서 화면을 변경
  // const [apple, setApple] = useState("사과");  // 사과라고 초기화.
  // const inEng2 = () => { // onClick함수를 설정해줌.( '사과' -> 'apple'로 바꿔라 )
  //   setApple("apple");
  // };
  // return (
  //     <div>
  //       <div className="state">{apple}</div>
  //        {/* 위에서 설정해준 apple이라는 변수를 화면에서 사용 */}
  //       <button onClick={inEng2}>영어로 변경!!</button>
  //        {/* onClick함수 적용 */}
  //     </div>
  //   );
  //////////////// state를 사용하면 전체돔이 아닌 FunctionState라는 state만 재렌더링이 된다.
  // ///////////// 이미 위에 작성된 다른 state는 렌더링 되지않고 그대로 유지됨.

  // 1. 기존 js를 사용해서 화면 바꾸는방식
  //   let apple = 사과;
  //   const inEng = () => {
  //     // apple = "apple"; --> 이렇게만 사용하면 console에서만 확인 할 수있고, 화면에서는 확인 할 수 없다.
  //     const content = document.querySelector(".state"); // return 위에서는 자유롭게 javascript를 사용할 수있다.
  //     console.log(apple);
  //     content.innerHTML = "apple"; // javascript로 사과 -> apple 변경해줌
  //   };
  ////////////// innerHTML을 사용하면 가상돔이 아닌 진짜돔을 건드리는 것이라서 전체가 재렌더링이 된다..

  // 3. (X) state (X) (O) vanilla JS (O) 사과 > apple > 사과 > apple
  //   const changeLang = () => {
  //     const content = document.querySelector(".state");
  //     content.innerText === "사과" ///////// innerText가 '사과'
  //       ? (content.innerText = "apple")//// 가 맞다면 'apple'을 innterText
  //       : (content.innerText = "사과");//// 가 아니라면 '사과'를 innerText
  //   };
  //   return (
  //     <div>
  //       <div className="state">사과</div>
  //       <button onClick={changeLang}>언어 변경?1</button>
  //     </div>
  //   );

  //   4;

  const [showEnglish, setShowEnglish] = useState(true);
  // 사과, apple이라는 문자열이 아닌 true, false의 boolean값을 이용.
  // true면 apple, false면 사과
  const changeLang2 = () => {
    setShowEnglish(!showEnglish);
    // showEnglish를 바꾸기 --- !showEnglish => showEnglish의 반대로 바꾸겠다.
    // true라면 false로, false라면 true로 변경
    //////////////// 여기까지만 하면 state는 변경 될지언정 화면에서는 바뀌지 않음.
    // ///////////// -> return값으로 화면으로 나타내줘야함
  };
  return (
    <div>
      <div className="state">{showEnglish ? "apple" : "사과"}</div>
      {/* 여기에서 showEnglish===true로 안해줘도 showEnglish 자체가 Boolean형태이므로 가능하다. */}
      <button onClick={changeLang2}>언어 변경?</button>
    </div>
  );
}
