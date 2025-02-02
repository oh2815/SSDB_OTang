import { Link } from "react-router-dom";
import Matzip from "./Matzip";

export default function Practice() {
  return (
    <main>
      <h2>실습문제입니다</h2>
      <Link to={"matzip"}>맛집 리스트</Link>
      <Link to={"codingon"}>사이트 실습문제</Link>
    </main>
  );
}
