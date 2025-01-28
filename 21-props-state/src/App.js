import { ClassProps, ClassProps2 } from "./components/ClassProps"; // 두 개 이상 불러 올 때에는 { }를 써서 객체로 불러옴.
import ClassState from "./components/ClassState"; // 이렇게 한 개만 불러오는 경우에는 { } 를 안써도 됨.
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import PracticeClassstate from "./components/practice/Pr_1_ClassState";
import PracticefunctionState from "./components/practice/Pr_1_FunctionState";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import HandleEx from "./components/ex/HandleEx";
import HandleEx2 from "./components/ex/HandleEx_2";
import HandleEx_3 from "./components/ex/HandleEx_3";
import HandleEx_2 from "./components/ex/HandleEx_2";
import HandleEx_4 from "./components/ex/HandleEx_4";
import PororoObj from "./components/ex/PororoObj";
import EntirePractice from "./components/ex/EntirePractice";
import PropsMap from "./components/PropsMap";
import PropsMap2 from "./components/PropsMap2";
import Alphabet from "./components/ex/Alphabet";
import Pr_Map_1 from "./components/practice/Pr_Map_1";
import Pr_Map_2 from "./components/practice/Pr_Map_2";

function App() {
  // propsMap에서 사용
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 1 },
    { name: "pear", krPrice: 5000, number: 3 },
    { name: "apple", krPrice: 20000, number: 15 },
  ];
  return (
    <div>
      {/* <h2>props 사용</h2>
      <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2 name="루피" color="pink" nickname="공주" fontColor="blue" />
      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: "red" }}>children 요소입니다!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children 요소입니다!</span>
      </FunctionProps4> */}
      {/* 
      <h2>State</h2>
      <h3>클래스형 State</h3>
      <ClassState />
      <h3>함수형 State</h3>
      <FunctionState />
      <h3>실습 클래스형 State</h3>
      <PracticeClassstate />
      <h3>실습 함수형 State</h3>
      <PracticefunctionState /> */}
      {/* <h2>event</h2>
      <SyntheticEvent />
      <Counter /> */}

      {/* <h2>여기부터 실습 과제</h2>
      <HandleEx />
      <HandleEx_2 />
      <HandleEx_3 />
      <HandleEx_4 />
      <PororoObj />*/}
      {/* <EntirePractice /> */}
      <h2>map 사용해보기</h2>
      {/* <PropsMap /> */}
      {/* porps이름 arr, props로 사용할 app.js에서 선언한 배열이름 {arr} */}
      {/* <PropsMap arr={arr} />
      <PropsMap2 arr={arr} />
      <PropsMap2 /> */}
      {/* <Alphabet /> */}
      {/* <Pr_Map_1 /> */}
      <Pr_Map_2 />
    </div>
  );
}

export default App; //  default는 딱 한개만 내보낸다는 뜻
