// useToggle :  true false 같은거 왔다 갔다
import { useState } from "react";

export default function useToggle(initialState = false) {
  // value는 toggle의 상태
  const [value, setValue] = useState(initialState);
  // toggleValue는 value를 반대값으로 전환시키는 함수
  const toggleValue = () => setValue(!value);

  // 현재의 value 값과, 반대전환함수를 배열에 담아서 return
  return [value, toggleValue];
}
