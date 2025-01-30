import { RefFunc1, RefFunc2 } from "./components/RefFunc";
import { RefClass1, RefClass2 } from "./components/RefClass";
import LifeCycleClass from "./components/LifecycleClass";
import LifeCycleFunc from "./components/LifecycleFunc";
import Test from "./components/tes";

import Container from "./components/practice/Container";
import FakePost from "./components/practice/FakePost";
import RealPost from "./components/practice/RealPost";
import Pr1_ColorRef from "./components/practice/Pr1_ColorRef";
import Pr2_numberQuiz from "./components/practice/Pr2_numberQuiz";

function App() {
  return (
    <div>
      {/* <RefClass1 />
      <RefClass2 /> */}
      {/* <RefFunc1 />
      <RefFunc2 /> */}

      {/* <LifeCycleClass /> */}
      <LifeCycleFunc />
      {/* <Test /> */}

      {/* <Container>
        <FakePost />
      </Container> */}
      {/* <RealPost /> */}
      {/* <Pr1_ColorRef /> */}
      {/* <Pr2_numberQuiz /> */}
    </div>
  );
}

export default App;
