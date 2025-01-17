import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFfoud">
      <h2>404 ERROR!!!</h2>
      <Link to={"/"} className="menu-item">
        홈으로 이동하기
      </Link>
    </div>
  );
}
