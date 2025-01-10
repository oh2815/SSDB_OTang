export default function Input({ setData }) {
  //   console.log(setData);
  //    {setData}
  //    ƒ dispatchSetState(fiber, queue, action) {
  //     {
  //         if (typeof arguments[3] === 'function') {
  //           error("State updates from the useState() and useReducer() Hooks don't support the " + 'sec…
  const handleChange = (evt) => {
    // 원래 state
    // {
    //     fruit: "apple",
    //     background: "white",
    //     color: "black",
    //     content: "디폴트",
    //   }
    // console.log("target", evt.target); inpit
    // console.log("ctarget", evt.currentTarget);
    setData((prevState) => {
      return { ...prevState, content: evt.target.value }; // 전개연산자 ... 많이 사용됨
    });
  };
  return (
    <div>
      내용:{" "}
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={handleChange}
      />
    </div>
  );
}
