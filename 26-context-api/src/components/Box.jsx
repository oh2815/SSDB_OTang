import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Box() {
  // 인자로 넣을 때 import 시켜줘야함
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <>
      <div>
        <h3>ThemeContext 사용해보기</h3>
        {/* {themeContext} : dark */}
        Theme: {themeContext}
      </div>
    </>
  );
}
