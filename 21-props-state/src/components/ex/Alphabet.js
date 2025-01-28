import { useState } from "react";
// 추가를 할 때마다 다음 줄로 자동으로 component가 재 랜더링이 되어야 하기 때문에 useState를 사용한다.
// state가 변경이 돼야 component가 재 랜더링이 된다.
export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);
  // input의 value값을 state로 관리
  const [input, setInput] = useState("");
  console.log([1, 2, 3, 4].concat(10));

  // onClick함수
  // list 함수에 id와 alpha값을 담은 객체를 맨 뒤에 붙여주기만 하면 된다.
  const addAlpha = () => {
    // concat : 배열 맨 뒤에 다가 인자안에 있는 것을 붙여주는 매서드
    const newList = list.concat({
      //   id: list.length + 1, // 이렇게 하면 마지막 요소가 선택이되긴 하나, 더블클릭시 삭제를 구현했을 때 중복 될 수 있음.
      // list의 length가 0일 때와 아닐때를 구분.
      // list.length-1 : 무조건 마지막 요소를 불러옴. 그 마지막 요소의 id를 가지고와서 +1을 해준다.
      // 이렇게 해주면 마지막 요소를 삭제를 해주든 말든 length에 기반을둔게 아니라서 관여받지 않게되고,
      //  마지막 요소의 id를 기준으로 +1을 해주는 것이기 때문에 상관 없음
      id: list.lenght == 0 ? 1 : list[list.length - 1].id + 1, // 배열의 마지막 요소 불러오는것
      alpha: input, // input창의 value 값
    });
    setList(newList);
    setInput(""); // input값도 같이 초기화.
  };
  // input태그에 대고 엔터를 눌렀을 떄 등록이 되도록  input - onkeydown
  const activeEnter = (e) => {
    //   console.log(e.key); // 키보드의 정보를 알 수 있음
    // 만약 event걸린 key가 Enter라면, addAlpha 를 실행시켜라.
    if (e.key == "Enter") {
      addAlpha();
    }
  };
  // 삭제하는 것은 id값을 기준
  const deleteAlpha = (id) => {
    const newAlpha = list.filter((alpha) => {
      // alpha는 객체 하나하나
      // 삭제한 요소만 제외하고 반환을 해주면 됨
      // deleteAlpha에는 눌리는 요소의 id를 인자로 받아주고 있음. 그걸 이용해서
      // 인자로 받아주고있는 list안의 alpha의 id가, 눌리는 요소의 id가 같은지 봐주면 됨.
      // 근데 alpha.id === id가 되면, id가 같은 요소만 출력하게 되므로 !==를 사용해서 눌린 요소와 id가 같지 않은 alpha.id들을 모두 보여주면 된다.
      return alpha.id !== id;
    });
    setList(newAlpha);
  };
  // filter도 map이랑 마찬가지로 콜백이 들어감. 매개변수도 3개받아줄 수 있음.
  // return을 통해서 조건을 걸어줌 // 조건에 맞는 요소만 찾아서 배열 반환 // 메서드 이름 그대로 필터링이라고 생각하면 쉬움
  const newArr = [1, 2, 3, 4, 5].filter((el) => {
    return el > 3; // el이 3보다 큰 값을 return
  });
  console.log(newArr);
  return (
    <div>
      <h2>alpabat</h2>
      <input
        type="text"
        value={input} // 자동으로 input 창을 비워주기 위해 value값에 input state를 넣어서 input state와 연동을 시켰다.
        onChange={(e) => {
          // 이벤트가 발생될 때마다 input값을 바꿔줌. e.target.value값으로//
          setInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {/* el에는 id와 alpha값이 있다.
        화면에 나오는 값은 el.alpha, key값으로는 el.id */}
        {list.map((el) => {
          return (
            <li
              key={el.id}
              onDoubleClick={() => {
                deleteAlpha(el.id);
              }}
            >
              {el.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
