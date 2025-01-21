import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  // useSelector라는 hook을 통해 index before.js에 저장해 놓은 state값을 불러옴.
  // 인자에 무언가를 전달 해주고,이걸 return을 시켜줌 ---> number에 저장됨
  const number = useSelector((state) => state);
  console.log("number", number); // number 1 로 나옴
  // useDispatch를 통해서 reducer에 action을 전달.
  // dispatch이름 변경 가능
  const dispatch = useDispatch();
  return (
    <>
      <h4>state값 가져오기</h4>
      <p>store에 저장되어 있는 number state: {number}</p>

      <h4>state값 변경하기</h4>
      {/* action은 어떤 데이터 형태여도 상관없지만, 여러가지 정보를 담아서 reducer에게 보낼줄 알아야 하기때문에 보통은
      객체로 보냄. 객체여야 알기 쉽다. */}
      {/* 
      dispatch는 함수이기 때문에 바로 적을 수 있다.  인자로 들어가는 것은 action값
      action의 type이 증가면  +1, 감소면 -1
      */}
      <button onClick={() => dispatch({ type: "증가" })}>
        number state +1
      </button>
      <button onClick={() => dispatch({ type: "감소" })}>
        number state -1
      </button>
    </>
  );
}

// export default function Test() {
//     return (
//       <>
//         <h4>state값 가져오기</h4>
//       </>
//     );
//   }
