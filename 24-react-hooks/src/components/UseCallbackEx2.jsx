import { useCallback, useState } from "react";

export default function UseCallbackEx2() {
  const [text, setText] = useState("");
  // 랜더링이 될 때마다 다시 메모리에 저장이 되고 있음
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };

  // 첫번째 렌더링이 되었을 떄만 메모리에 저장됨
  // 메모리에 부담을 주는 기능이기 때문에 큰 정보나 복잡한 연산이면 쓰는게 좋다. 그게 아니면 useState, useEffect 사용
  // 사실 이건 간단한 함수라 굳이 useCallback 사용 안해도 됨
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <div>
      <input type="text" onChange={onChangeText} value={text} />
      <p>작성한 값 : {text}</p>
    </div>
  );
}
