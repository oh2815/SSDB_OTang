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
  // 이거는 직접 상품들을 선언해줘서 불러오는 방식.
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

  // axios에서 불러오는 data는 렌더링 되자마자 data가 들어오는 것이아니고 시간이 좀 걸린 다음에 data가 들어오는 것이므로
  //  변수에다가 저장하는 것이 아니고 Sate에다가 저장해야함.
  const [realProducts, setRealProducts] = useState([]);

  // 상품들을 axios로 불러오기 ( DB 연결을 하지 않을 것이라서 open api를 사용함. )
  // axios 라이브러리 설치해서 사용, import후 사용
  const getProducts = async () => {
    const res = await axios.get(
      // res는 배열로 들어옴
      "https://jsonplaceholder.typicode.com/comments"
    );
    console.log(res.data.length);
    // 500개이므로 밑에 slice로 15개 잘라줌
    setRealProducts(res.data.slice(0, 15));
    // res.data : 배열
    // res.data.length : 그 배열이 몇개가 들어오는지
  };
  // axio요청 보낼 떄에는 useEffect랑 같이 써야 함.
  // 원래는 useEffect안에서 axios를 사용해야하는데 async~await를 사용해주려고 하기때문에
  // useEffect에서 사용할 수 없으므로 함수 따로 지정해서 사용. 함수에서 적어주고 useEffect에 함수 적용.
  useEffect(() => {
    getProducts();
  }, []);
  // dependency array는 빈 배열 // 빈 배열이면 처음 렌더링 될 때만 실행.
  // dependency array : 훅이 언제 다시 실행될지를 결정 ( 배열 안에 포함된 값들이 변할 때만 훅이 다시 실행.)
  return (
    <>
      {/* 헤더는 따로 라우팅 처리를 해주지 않았기에 어느 주소를 가던 상단에 보인다. 
      이런 공통적으로 보이는 header footer는 App.js 처리를 해주면 된다.*/}
      <Header />

      {/* 라우팅 처리 */}
      {/*
      - Routes = 반드시 childern props를 받아줘야함. 
      - children자리에 Route가 들어감 
      - Route Component는 props를 요구함 - path와 element.
      - path에는 경로, element에는 경로에 맞는 Component ( 해당 component import 시켜줘야함 )
       */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test />} />
        {/* ProductPage에서 products를 받아주니까 element에도 전달을 해줘야 함 */}
        <Route
          path="/products"
          element={<ProductPage products={realProducts} />}
        />
        {/* 
        - detail 페이지에서는 전체를 보여줄 필요가 없고, 객체를 보여주면 된다.
       -  realProducts라는 배열형태의 전체 data를 넘겨주고있는 이유 : app.js에서 라우팅을 해주고있기 때문에
        detail page에서 필요한 정보를 app.js에서 넘겨줘야 함. 그런데 app.js에서는 사용자가 몇번 id를 눌렀는지를 모름. 
        그래서 전체를 넘겨주고 있고 사용자가 몇번 id를 눌렀는지에 대한것은 detail page에서 params를 얻어서 처리해 줄것이다.
        */}
        <Route
          path="/product/:productID"
          element={<ProductDetailPage products={realProducts} />}
        />
        {/* '*'을 이용해서 NoutFound Component 나타내기 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
