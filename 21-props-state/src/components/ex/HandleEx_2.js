import { useState } from "react";

export default function HandleEx_2() {
  const [color, setColorchange] = useState("black");
  const [word, setWordchange] = useState("검정색");
  const ChangeRed = () => {
    setColorchange("red");
    setWordchange("빨간색");
  };
  const ChangeBlue = () => {
    setColorchange("blue");
    setWordchange("파란색");
  };

  return (
    <div>
      <p style={{ color }}>{word} 글씨</p>
      <button onClick={ChangeRed}>빨간색</button>
      <button onClick={ChangeBlue}>파란색</button>
    </div>
  );
}
