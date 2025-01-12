import { Component } from "react";

export default class ClassState extends Component {
  // render() 함수 위에서 state 선언해야함.
  //  함수형이랑 다르게  state가 객체로 관리됨.
  state = {
    banana: "바나나",
  };
  render() {
    const { banana } = this.state;
    // this.state.banana라고 해도 되고,
    // 이렇게 구조분해문법을 사용해서 banana 라고 써도 된다.
    return (
      <div>
        <p>{banana}</p>
        <button
          onClick={() => {
            this.setState({ banana: "banana" }); // this.setState도 기본적으로 주어짐.
          }} // button click시 바나나 -> banana로 변경
        >
          영어로 변경!(class 형)
        </button>
      </div>
    );
  }
}
