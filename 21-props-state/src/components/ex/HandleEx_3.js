import { useState } from "react";

export default function HandleEx_3() {
  const [change, setChangeWord] = useState(true);
  const changeAll = () => {
    setChangeWord(!change);
  };
  return (
    <div>
      <div style={{ border: "2px solid yellow" }}>
        <button onClick={changeAll}>{change ? "사라져라" : "보여라"}</button>
        <p>{change ? "안녕하세요" : ""}</p>
      </div>
    </div>
  );
}
