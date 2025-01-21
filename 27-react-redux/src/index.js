import ReactDOM from "react-dom/client";

import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

//3. store설정
// module/index.js에서 통합한 rootReducer를 value로 전달
const store = configureStore({ reducer: rootReducer }); // { }로 인자 전달 : key, 전달할 함수 모두 reducer
// 통합된 Reducer - rootReducer를 사용해 주었기때문에 store에 있는 isData, counterReducer를 Box1, Box2 Component에서 사용할 수 있다.

// state의 초기값은 매개변수의 default값으로 설정
// 이 방식으로 해도 되는데, 여러개를 전달해줘야하면 따로 store만들어서 하는게 좋음
// function reducer(numberState = 1, action) {
//   console.log(action);
//   if (action.type == "증가") {
//     return numberState + 1;
//   } else if (action.type == "감소") {
//     return numberState - 1;
//   } else {
//     return numberState;
//   }
//   return numberState;
// }

// 4. App 컴포넌트 자식 컴포넌트에서 사용 가능하도록
// store props로 store 전달
root.render(
  // Provider는 children props를 제외하고 store라는 인자도 요구를 함
  // 여기서 store를 안넘겨주면 error발생
  <Provider store={store}>
    <App />
  </Provider>
);
