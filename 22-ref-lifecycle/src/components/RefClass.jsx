import React from "react";

// 1. callback으로 처리 해줌
export class RefClass1 extends React.Component {
  // 버튼에 onClick 걸어줌
  handleFocus = () => {
    console.log(this.myInput); //input 태그 그 자체
    console.log(this.myInput.value); // input안에 입력된 값
    this.myInput.focus(); // ref(this.myInput)에 focus를 줌
    // 로그인시 유효성 검사가 잘 이루어지지 않았을 때 focus사용하면 client입장에서 봤을 때 좀 더 편리하다고 느낄 수있음
  };
  render() {
    return (
      <div>
        <p>class형 component, 버튼 클릭시 input에 focus 처리 </p>
        <p>ref 속성에 콜백 전달</p>
        <input
          type="text"
          // 함수를 저장해서 ref를 받아옴 ref는 어떠한 값을 저장함(여기서는 ref로 받아줌)
          ref={(ref) => {
            this.myInput = ref; // input에 ref 콜백함수를 지정, myInput 이라는것은 임의 지정 this는 class.
            // this: class 전체 ,, this( 이 class )의 myInput이라는 곳에 ref를 저장한다.
            // class 형은 ref를 제공해주기 때문에 인자를 잘 받아와주기만 하면 된다. ( 따로 불러줄 필요 X )
            // 이렇게 해주면 이 ref는 input이 선택 되었다는 뜻
          }}
        />
        {/* input창 안누르고 버튼눌러도  input창이 focus됨 */}
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
// 2. createRef 함수를 사용해서 처리
export class RefClass2 extends React.Component {
  // React안에있는 createRef로 ref객체 사용
  // createRef는 import가 필요하다.
  // 이렇게 선언만 해준다고 되는것이아니고 선언 후, 원하는 input에 ref 속성에 myInput을 전달해줘야 한다.
  myInput = React.createRef();
  handleFocus = () => {
    // 위의 콜백함수일 때와는 다르게 input이 current에 담겨져있다.
    console.log(this.myInput.current); //
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
