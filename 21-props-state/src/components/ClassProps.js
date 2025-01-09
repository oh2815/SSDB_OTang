import { Component } from "react"; // react에서  Component를 제공한다.
// Component class에는 여러가지 속성이 정의가 되어있다.
// Component라는 class를 react에서 상속받아 오고있기 때문에 porops나 state를 그냥 사용 할 수 있는 것이다.

// props 쓰기위해 Component를 상속받아옴 extends
// props는 무슨일이 있어도 무조건 객체형태
class ClassProps extends Component {
  render() {
    // 반드시 render함수 안에다가 html을 return해주는 return함수를 작성해야함.
    const divStyle = {
      color: this.props.color, // props는 무슨일이 있어도, 몇개를 가지고와도 객체
    };
    return (
      <div style={divStyle}>
        <h4>hi, {this.props.name} </h4>
        <ul>
          <li>별명:{this.props.nickName}</li>
          <li>좋아하는 색:{this.props.color}</li>
        </ul>
      </div>
    ); // 여기에 적힌 data들은 내보내기를 해줘야 부모 Component에서 사용 할 수있음
  }
}

class ClassProps2 extends Component {
  render() {
    const { name, color, nickname, fontColor } = this.props; // 구조분해 할당을 해줬기 때문에
    const divStyle = {
      color: fontColor, //fontColor
      backgroundColor: color, // color를 사용할 수 있음
    };
    return (
      <div style={divStyle}>
        <h4>hi, {name} </h4>
        <ul>
          <li>별명:{nickname}</li>
          <li>좋아하는 색:{color}</li>
        </ul>
      </div>
    );
  }
}

// 위에 설정해 준 data가 잘 안넘어와졌을 때 사용되는
// 기본 default값 설정
ClassProps2.defaultProps = {
  fontColor: "beige",
};
export { ClassProps, ClassProps2 }; // 두 개이상의 Component를 넘겨줄 때에는 default빼고 { }에 담아줌
