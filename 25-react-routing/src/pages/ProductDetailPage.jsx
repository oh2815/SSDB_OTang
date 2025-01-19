import { useNavigate, useParams } from "react-router-dom";
// product 상세 설명을 가져오려고 하기 때문에 products를 인자로 넣어준다.
export default function ProductDetailPage({ products }) {
  // navigate는 함수이고 useNavigate가 함수를 사용 할 수 있게 return을 해줌
  // button의 onclick으로 함수처럼 사용 가능
  const navigate = useNavigate(); // 함수
  console.log(products);
  // params를 통해서 몇번 id 정보를 찾고있는지 확인
  // app.js에서는 사용자가 몇번 id를 눌렀는지를 모르니까 detail page에서 params를 이용해서 처리
  const params = useParams(); // params라는 변수로 useParams 사용
  console.log("params", params);
  // params {productID: '1'} 이렇게 뜸 ( 문자열 1 )
  // key 이름의 출처? Route 컴포넌트의 path props 확인!

  const { productID } = useParams(); // 찾고있는 데이더에 대한 id값
  console.log(productID);
  // 그냥 1

  // productID 기준으로 products에서 원하는 데이터 찾기
  // products 배열에서 filter함수 써서 조건에 맞는 data들을 배열 형태로 return함.
  // 여기서 정해준 prd는 객체 하나하나하나를 반복해서 돌아줌.
  // prd.id랑 productID랑 같은 것을 찾고 싶음.
  // 근데 위에서 productID는 문자열이므로  NUMBER( )를 사용해서 형변환을 시켜준다.
  const [targetProduct] = products.filter(
    (prd) => prd.id === Number(productID)
  );
  console.log(targetProduct);
  // 여기 console의 결과 targetProduct는 배열이다.
  // 우리가 원하는 data는 targetProduct의 [0]번에 다 있음.
  // targetProduct는 id값이고 id값은 많이 들어와 봐야 1개이기 때문에 { } 아니면 undefined 이다.
  // 여기서 객체 { }에 들어가는 값은 id, name, email, body이다. -> targetProduct.~로 접근 가능
  if (!targetProduct) {
    return <main>없는상품이에요</main>;
    // 만약에 targeProduct가 없다면, undefined라면 밑에있는 <main>을 나타내는 것이 아니고,
    // 위에있는 <main>'없는 상품이에요'를 return.
  }
  return (
    <main>
      <p>여기는 상품 디테일 페이지</p>
      {/* 
      -1 : 이전페이지 : 뒤로가기 
       / : 특정 page지정
      */}
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
