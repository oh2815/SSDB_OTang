import ProductItem from "../components/ProductItem";

export default function ProductPage({ products }) {
  return (
    <main className="ProductPage">
      <div>여기는 상품 목록!</div>
      {/* 물음표: 잘 data가 잘 안들어올 경우 대비  */}
      {/* 여기에서의 product는 배열에서의 객체 하나를 나타냄. */}
      {products?.map((product) => {
        return <ProductItem product={product} key={product.id} />;
        // 아래 내용을 ProductItem으로 Component를 만들어서 뺴줌.
        // 아래내용에서 product라는 props를 받아주고 있으니 위에서도 product를 받아줘야함.
        // 그리고 배열이 아니고 객체를 받아줄 것이라서  { } 사용
        //       <ul>
        //         <li>상품명:{product.name}</li>
        //         <li>판매자 이메일:{product.email}</li>
        //         <li>상세설명:{product.body.slice(0, 80)}...</li>
        //       </ul>
      })}
    </main>
  );
}
