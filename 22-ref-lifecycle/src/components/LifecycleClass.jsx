import { Component } from "react";

// 굳이 안내보내줘도 됨
class MyComponent extends Component {
  // 마운트되었을 때 동작
  componentDidMount() {
    console.log("mount 되었습니다!");
  }

  // 업데이트되었을 때 동작
  componentDidUpdate() {
    console.log("update 되었습니다!");
  }

  // 언마운트 되기 직전
  componentWillUnmount() {
    console.log("unmount 될겁니다!");
  }

  render() {
    return <p>MyComponent {this.props.number}</p>;
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>On/Off</button>
        {/* 
        - visible state 값에 따라서 MyComponent 가 생성및 제거됨
        - 생성(mount) , 제거(unmount)
         */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
