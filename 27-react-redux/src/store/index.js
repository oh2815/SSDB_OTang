import { combineReducers } from "@reduxjs/toolkit";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";
import { bankReducer } from "./module/bankReducer";

// 2. store/index.js , 여러개의 저장소(여러개의 reducer)를 통합하는 역할 /// 통합을 위한 index.js
// store/module에서 만들어준 여러개의 reducer를 통합
// 통합된 reducer : rootReducer -> import시 주소가 redux말고 @reduxjs/toolkit에서 불러와줌
// 여기서 사용되는 key의 이름은 아무거나 사용 없음
const rootReducer = combineReducers({
  isData: isDataReducer,
  count: counterReducer,
  bank: bankReducer,
  // 만약 전역 관리 state가 추가되면 이 곳에서도 계속 추가
});

// 2-2 내보내기
// src/index.js에서 쓰일 예정
// 통합된 reducer 내보내기
export default rootReducer;
