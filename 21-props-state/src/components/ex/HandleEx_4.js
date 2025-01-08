import { useState } from "react";

export default function HandleEx_4() {
  const [number, setIncrease] = useState(0);
  const Increase = () => {
    setIncrease(number + 1);
  };
  const Decrease = () => {
    setIncrease(number - 1);
  };
  return (
    <div>
      <p>
        숫자:{number}
        {number > 7 ? "😈" : "😊"}
      </p>
      <button onClick={Increase}>1증가</button>
      <button onClick={Decrease}>1감소</button>
    </div>
  );
}
