import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    // 벡틱으로 전해줘도 됨, 큰따옴표니까 '+'사용
    <Link to={"/product/" + product.id} className="ProductItem">
      <ul>
        <li>상품명:{product.name}</li>
        <li>판매자 이메일:{product.email}</li>
        <li>상세설명:{product.body.slice(0, 80)}...</li>
      </ul>
    </Link>
  );
}
