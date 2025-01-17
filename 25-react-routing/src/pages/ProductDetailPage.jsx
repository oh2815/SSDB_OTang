import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  const navigate = useNavigate(); // 함수
  console.log(products);
  // params를 통해서 몇번 id 정보를 찾고있는지 확인
  const params = useParams();
  console.log("params", params);
  // params {productID: '1'} 이렇게 뜸 ( 문자열 1 )
  // key 이름의 출처? Route 컴포넌트의 path props 확인!

  const { productID } = useParams(); // 찾고있는 데이더에 대한 id값
  console.log(productID);
  // 그냥 1

  // productID 기준으로 products에서 원하는 데이터 찾기
  const [targetProduct] = products.filter(
    (prd) => prd.id === Number(productID)
  );
  console.log(targetProduct);
  if (!targetProduct) {
    return <main>없는상품이에요</main>;
  }
  return (
    <main>
      <p>여기는 상품 디테일 페이지</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
}
