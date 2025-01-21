// 1 할일 : src/store/module 개별적인 전역 state 선언
// --> reducer 생성
// Boolean형 reducer
// 초깃값 false
const initialState = false;

// 외부 파일에서 사용 할 예정이므로 export
// 인자로 state와 action을 받아줬는데 state의 초깃값은 선언해놓은 initialState로 설정
export const isDataReducer = (state = initialState, action) => {
  console.log("isData action", action); // {type: ~~~} { type: "isData/CHANGE" } // action값에 따라 밑에 로직 작성
  // isData/CHANGE라면 기존 state값의 반대값으로 return 해주세요
  if (action.type === "isData/CHANGE") return !state;
  return state; // 기존 state 유지시켜줌
};
