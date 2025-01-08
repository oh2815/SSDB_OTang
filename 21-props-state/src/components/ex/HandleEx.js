import { useState } from "react";

export default function HandleEx() {
  const [greeting, setGreeting] = useState("Hello World");
  const changeWord = () => {
    setGreeting("Goodbye World");
  };

  return (
    <div>
      <p>{greeting}</p>
      <button onClick={changeWord}>바꾸기</button>
    </div>
  );
}
