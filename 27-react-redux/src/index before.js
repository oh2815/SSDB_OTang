import ReactDOM from "react-dom/client";

import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer: reducer }); // key, 전달할 함수 모두 reducer

// state의 초기값은 매개변수의 default값으로 설정
function reducer(numberState = 1, action) {
  // Test.jsx에서 dispatch라는 이름으로 useDispatch를 사용하고있고,
  // onClick으로 dispatch함수를 사용하고 있으며, 인자(action값)으로 { type: "증가" }를 주고있다.
  // dispatch함수를 button의 onCklick으로 걸어주고있으므로 button누르면 console창에 action값으로 { type: "증가" } 가 나온다.
  console.log(action);
  if (action.type == "증가") {
    return numberState + 1; // state변경사항을 return
  } else if (action.type == "감소") {
    return numberState - 1; // state변경사항을 return
  } else {
    return numberState;
  }
  return numberState;
}
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
