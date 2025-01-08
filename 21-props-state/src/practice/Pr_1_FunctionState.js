import { useState } from "react";

export default function PracticefunctionState() {
  const [Number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(Number - 2);
  };
  const Decrease = () => {
    setNumber(Number + 1);
  };
  return (
    <div>
      <div>{Number}</div>
      <button onClick={Increase}>-2</button>
      <button onClick={Decrease}>+1</button>
    </div>
  );
}
