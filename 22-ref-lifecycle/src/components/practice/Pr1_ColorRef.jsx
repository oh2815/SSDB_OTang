import { useRef, useState } from "react";

export default function Pr1_ColorRef() {
  const changeColorRef = useRef();
  const [color, setColor] = useState("red");
  const changeColor = () => {
    setColor(changeColorRef.current.value);
    console.log(changeColorRef.current.value);
    changeColorRef.current.focus();
    changeColorRef.current.value = "";
  };

  return (
    <>
      <p style={{ color: "blue", fontSize: "30px", fontWeight: "700" }}>실습</p>
      <div
        style={{
          width: "300px",
          textAlign: "center",
          backgroundColor: color,
        }}
      >
        <span>
          <input type="text" ref={changeColorRef} />
        </span>
        <br />
        <span>
          <button onClick={changeColor}>색 적용</button>
        </span>
      </div>
    </>
  );
}
