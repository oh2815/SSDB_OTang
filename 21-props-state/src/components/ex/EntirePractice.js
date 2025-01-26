import { useState } from "react";
import Result from "./Result"; // result component 따로 만들어서 import시켜주기
import Select from "./Select"; // select component 따로 만들어서 import시켜주기
import Input from "./Input"; // input component 따로 만들어서 import시켜주기

export default function EntirePractice() {
  // data가 바뀔 때마다 화면이 변경 되어야 하기때문에 state로 관리해야한다.
  // setData로 data 관리. import필수
  const [data, setData] = useState({
    // 문자열로 관리
    fruit: "apple",
    background: "white",
    color: "black",
    content: "디폴트",
  });
  return (
    <div>
      {/*  Select 와 Input component에는 현재의 state가 필요가 없기 떄문에 data값을 넘겨주지 않음.
      어떤 값을 고르느냐에 따라 state가 달라져야 하기 떄문에 setData를 넘겨준다.  */}
      {/* Select component 따로 만들어서 import시켜주기 */}
      <Select setData={setData} />
      {/* Input component 따로 만들어서 import시켜주기 */}
      <Input setData={setData} />
      {/* Result에는 실제로 변경된 값을 화면에서 보여주고 있기 때문에 data를 넘겨줌 */}
      {/* Result component 따로 만들어서 import시켜주기 */}
      <Result data={data} />
      <div></div>
    </div>
  );
}
