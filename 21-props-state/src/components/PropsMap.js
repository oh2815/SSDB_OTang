import { FunctionProps2 } from "./FunctionProps";

// props를 받았는데 app.js에서 인자를 전달해주지 않으면 undefined 나옴
export default function PropsMap({ arr }) {
  // console.log(arr) // 배열
  const testArr = [1, 2, 3, 4, 5];
  // map: 배열을 순회하면서 원하는 연산을 대신 해줌.
  const newTestArr = testArr.map((el) => {
    // 1 ~ 5까지 돌면서 + 10을 해서 결과값을 return해줌
    return el + 10;
  });
  // 배열 안에 tag혹은 component도 들어올 수 있다.
  const testArr2 = [<div>안녕하세요</div>, <div>제 이름은 태원입니다.</div>]; // 배열 안에 태그가 올 수 있는 것을 알게됨
  return (
    <div>
      <h3>map 사용해보기</h3>
      {testArr}
      {/* {newTestArr} */}
      {/* {testArr2} */}
      <ul>
        {/* map은 return안에서 사용할 수 있다. */}
        {arr.map((el, i) => {
          return (
            // tag를 넣어서 map을 돌릴 수 있음
            <li key={i}>
              {el.name}, {el.number}개에 {el.krPrice}원
            </li>
          ); // li 반복 예정
        })}
      </ul>

      {/* <FunctionProps2 name="사과" krPrice={10000} number={5} /> */}
      {arr.map((el, i) => {
        return (
          // 정보가 전부 el에 들어있음 : el.~~ , el.~~ ,el.~~ ...
          // map함수를 이용해서 html head를 return할 시에는 key를 사용해야한다.
          // 이유 : react는 업데이트 전 기존 요소와 업데이트 후 요소를 비교하는데 key를 사용
          //        key는 html마다 고유한 값을 가질 수 있도록 id값을 넣거나 index값을 넣어준다. id값이 있으면 보통 id를 쓴다.
          // key값 안주면 warning 메세지 뜸
          <FunctionProps2
            key={i} //  고유한 값이 index밖에 없으므로
            name={el.name}
            krPrice={el.krPrice}
            number={el.number}
          />
        );
      })}
    </div>
  );
}
