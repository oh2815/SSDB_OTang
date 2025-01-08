import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import PracticeClassstate from "./practice/Pr_1_ClassState";
import PracticefunctionState from "./practice/Pr_1_FunctionState";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import HandleEx from "./components/ex/HandleEx";
import HandleEx2 from "./components/ex/HandleEx_2";
import HandleEx_3 from "./components/ex/HandleEx_3";
import HandleEx_2 from "./components/ex/HandleEx_2";
import HandleEx_4 from "./components/ex/HandleEx_4";
import PororoObj from "./components/ex/PororoObj";

function App() {
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
      </FunctionProps4>

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

      <h2>여기부터 실습 과제</h2>
      <HandleEx />
      <HandleEx_2 />
      <HandleEx_3 />
      <HandleEx_4 />
      <PororoObj />
    </div>
  );
}

export default App; //  default는 딱 한개만 내보낸다는 뜻
