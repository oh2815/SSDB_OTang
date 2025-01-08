import { Component } from "react";
// props 쓰기위해 Component를 상속받아옴 extends
// props는 무슨일이 있어도 무조건 객체형태
class ClassProps extends Component {
  render() {
    const divStyle = {
      color: this.props.color,
    };
    return (
      <div style={divStyle}>
        <h4>hi, {this.props.name} </h4>
        <ul>
          <li>별명:{this.props.nickName}</li>
          <li>좋아하는 색:{this.props.color}</li>
        </ul>
      </div>
    );
  }
}

class ClassProps2 extends Component {
  render() {
    const { name, color, nickname, fontColor } = this.props;
    const divStyle = {
      color: fontColor,
      backgroundColor: color,
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

ClassProps2.defaultProps = {
  fontColor: "beige",
};
export { ClassProps, ClassProps2 };
