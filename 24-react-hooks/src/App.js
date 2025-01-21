import CustomHook from "./components/CustomHook.jsx";
import Form from "./components/Form.jsx";
import PrForm from "./components/PrForm.jsx";
import UseCallbackEx1 from "./components/UseCallbackEx1.jsx";
import UseCallbackEx2 from "./components/UseCallbackEx2.jsx";
import UseMemo1 from "./components/UseMemo1.jsx";
import UseMemObj from "./components/UseMemObj.jsx";
import UseReducer from "./components/UseReducer.jsx";
import useTitle from "./hooks/useTitle.js";
function App() {
  useTitle("Hook 배워보기");
  return (
    <>
      {/* <UseMemo1 />
      <UseMemObj /> */}
      {/* <UseCallbackEx1 />
      <UseCallbackEx2 /> */}
      <UseReducer />
      {/* <CustomHook /> */}
      {/* <Form /> */}
      {/* <PrForm /> */}
    </>
  );
}

export default App;
