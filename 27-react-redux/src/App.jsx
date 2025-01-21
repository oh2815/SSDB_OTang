import Bank from "./components/Bank";
import { Box1 } from "./components/Box";
import Test from "./components/Test";

function App() {
  return (
    <>
      <h1>redux사용해보기</h1>
      {/* <Test /> */}
      <h2>여러 개의 전역 state 사용하기</h2>
      <Box1 />
      <Bank />
    </>
  );
}

export default App;
