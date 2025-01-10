import { FunctionProps2 } from "./FunctionProps";

export default function PropsMap({ arr }) {
  // console.log(arr) // 배열
  const testArr = [1, 2, 3, 4, 5];
  const newTestArr = testArr.map((el) => {
    return el + 10;
  });
  const testArr2 = [<div>안녕하세요</div>, <div>제 이름은 태원입니다.</div>]; // 배열 안에 태그가 올 수 있는 것을 알게됨
  return (
    <div>
      <h3>map 사용해보기</h3>
      {testArr}
      {/* {newTestArr} */}
      {/* {testArr2} */}
      <ul>
        {arr.map((el, i) => {
          return (
            <li key={i}>
              {el.name}, {el.number}개에 {el.krPrice}원
            </li>
          ); // li 반복 예정
        })}
      </ul>

      {/* <FunctionProps2 name="사과" krPrice={10000} number={5} /> */}
      {arr.map((el, i) => {
        return (
          <FunctionProps2
            key={i}
            name={el.name}
            krPrice={el.krPrice}
            number={el.number}
          />
        );
      })}
    </div>
  );
}
