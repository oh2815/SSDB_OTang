import { useState } from "react";
import Result from "./Result";
import Select from "./Select";
import Input from "./Input";

export default function EntirePractice() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "white",
    color: "black",
    content: "디폴트",
  });
  return (
    <div>
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
      <div></div>
    </div>
  );
}
