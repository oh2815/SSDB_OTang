import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);
  const [input, setInput] = useState("");
  console.log([1, 2, 3, 4].concat(10));

  const addAlpha = () => {
    const newList = list.concat({
      //   id: list.length + 1, // 이렇게 하면 더블클릭시 삭제를 구현했을 때 중복 될 수 있음.
      id: list.lenght == 0 ? 1 : list[list.length - 1].id + 1, // 마지막 요소 불러오는것
      alpha: input,
    });
    setList(newList);
    setInput("");
  };
  // input태그에 대고 엔터를 눌렀을 떄 등록이 되도록  input - onkeydown
  const activeEnter = (e) => {
    //   console.log(e.key); // 키보드의 정보
    if (e.key == "Enter") {
      addAlpha();
    }
  };
  const deleteAlpha = (id) => {
    const newAlpha = list.filter((alpha) => {
      return alpha.id !== id;
    });
    setList(newAlpha);
  };

  const newArr = [1, 2, 3, 4, 5].filter((el) => {
    return el > 3;
  });
  console.log(newArr);
  return (
    <div>
      <h2>aaa</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
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
