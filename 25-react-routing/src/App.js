import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Test from "./pages/Test";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import "./style/common.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const tempProductsData = [
    {
      id: 1,
      name: "다이슨 슈퍼소닉",
      email: "Eliseo@gardner.biz",
      body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
    },
    {
      id: 2,
      name: "SSD 1TB",
      email: "Jayne_Kuhic@sydney.com",
      body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
    },
  ];
  const [realProducts, setRealProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      // res는 배열로 들어옴
      "https://jsonplaceholder.typicode.com/comments"
    );
    console.log(res.data.length); //500개
    setRealProducts(res.data.slice(0, 15));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Header />

      {/* 라우팅 처리 */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/products"
          element={<ProductPage products={realProducts} />}
        />
        <Route
          path="/product/:productID"
          element={<ProductDetailPage products={realProducts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
