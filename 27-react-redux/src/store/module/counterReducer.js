// 1 할일 : src/store/module 개별적인 전역 state 선언
// --> reducer 생성
// Number형 reducer
// 초깃값 1로 설정
const initialState = 1;

// action을 return해주는 함수 -- Component에서 사용
export const countPlus = () => {
  return { type: "count/INCREMENT" };
};
export const countMinus = () => {
  return { type: "count/DECREMENT" };
};
// state와 action을 인자로 받아줌
export const counterReducer = (state = initialState, action) => {
  console.log(action);
  // { type: "count/DECREMENT" }
  // { type: "count/INCREMENT" }
  // switch던 if던 아무거나 사용
  switch (action.type) {
    case "count/DECREMENT":
      return state - 1;
    case "count/INCREMENT":
      return state + 1;
    default:
      return state; // 위의 경우가 아무것도 아니라면 기존 state를 유지시켜준다.
  }
};
