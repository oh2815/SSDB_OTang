import { useState } from "react";

export default function Pr_Map_1() {
  const [allInfo, setAllInfo] = useState([
    {
      name: "태원",
      email: "태원@naver.com",
    },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addContent = () => {
    const newInfo = allInfo.concat({
      name: name,
      email: email,
    });
    setAllInfo(newInfo);
    setName("");
    setEmail("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <button onClick={addContent}>등록</button>
      <h3>
        {allInfo.map((el) => {
          return (
            <li key={el.name}>
              {el.name} - {el.email}
            </li>
          );
        })}
      </h3>
    </div>
  );
}

{
  /* //   const [info, setInfo] = useState([{ name: "태원", email: "태원@naver.com" }]);
//   const [input, setInput] = useState("");
//   const addContent = () => {
//     const newInfo = info.concat({
//       name: input,
//       email: input,
//     });
//     console.log("123", input);
//     setInfo(newInfo);
//     setInput("");
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => {
//           setInput(e.target.value);
//         }}
//         placeholder="이름"
//       ></input>
//       <input type="email" value={input} placeholder="email"></input>
//       <button onClick={addContent}>등록</button>
//       <h3>
//         {info.map((el) => {
//           return (
//             <li key={el.name}>
//               {el.name} - {el.email}
//             </li>
//           );
//         })}
//       </h3>
//     </div>
//   );
// } */
}
