// action type의 상수
const WITHDRAW = "bank/WITHDRAW";
const DEPOSIT = "bank/DEPOSIT";

// action return함수
// action에 매개변수 받아줌
// payload : payload ---> 그냥 payload로 적어도 됨
export const deposit = (payload) => ({ type: DEPOSIT, payload });
export const withdraw = (payload) => ({ type: WITHDRAW, payload });

const initialState = 0;

// 위의 deposit과 withdraw에서 rerutn되는 객체가 action의 값으로 들어 온다.
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
