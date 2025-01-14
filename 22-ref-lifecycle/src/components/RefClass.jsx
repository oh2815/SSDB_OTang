import React from "react";

export class RefClass1 extends React.Component {
  // 버튼에 onClick 걸어줌
  handleFocus = () => {
    console.log(this.myInput); //input 태그 그 자체
    console.log(this.myInput.value); // input안에 입력된 값
    this.myInput.focus(); // ref에 focus를 줌
    // 로그인시 유효성 검사가 잘 이루어지지 않았을 때 focus사용하면 client입장에서 봤을 때 좀 더 편리하다고 느낄 수있음
  };
  render() {
    return (
      <div>
        <p>class형 component, 버튼 클릭시 input에 focus 처리 </p>
        <p>ref 속성에 콜백 전달</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref; // input에 ref 콜백함수를 지정, myInput 이라는것은 임의 지정 this는 class.
          }}
        />
        {/* input창 안누르고 버튼눌러도  input창이 focus됨 */}
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
export class RefClass2 extends React.Component {
  // React안에있는 createRef로 ref객체 사용
  myInput = React.createRef();
  handleFocus = () => {
    console.log(this.myInput.current);
    console.log(this.myInput.current.value);
    this.myInput.current.focus();
  };
  render() {
    return (
      <div>
        <p>class형 component, 버튼 클릭시 input에 focus 처리 </p>
        <p>createRef( )를 통해서 ref객체 생성</p>
        {/* 사용하려면 ref걸어줘야 함 */}
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
