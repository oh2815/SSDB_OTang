import { Component } from "react";

export default class PracticeClassstate extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <p>{number}</p>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}
