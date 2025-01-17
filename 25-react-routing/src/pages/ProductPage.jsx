import ProductItem from "../components/ProductItem";

export default function ProductPage({ products }) {
  return (
    <main className="ProductPage">
      <div>여기는 상품 목록!</div>
      {/* 물음표는 잘 data가 잘 안들어올 경우 대비  */}
      {products?.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </main>
  );
}
