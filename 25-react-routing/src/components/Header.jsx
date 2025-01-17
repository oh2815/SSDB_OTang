import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <span>LOGO</span>
      <div>
        <Link to={"/"} className="menu-item">
          홈으로
        </Link>
        <br />
        <Link to={"/test"} className="menu-item">
          TEST
        </Link>
        <br />
        <Link to={"/products"} className="menu-item">
          Product
        </Link>
      </div>
    </header>
  );
}
