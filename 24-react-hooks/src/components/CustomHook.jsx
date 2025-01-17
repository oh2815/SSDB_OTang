import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  const [isOpen, setIsOpen] = useToggle(); // 빈값으로 false
  return (
    <>
      <h3>custom hook 사용해보기</h3>
      <div onClick={setIsOpen}>Q. 리액트에서 custom hook을 만들 수 있나요?</div>
      {isOpen && <span>A. 네! 사용할 수 있습니다.</span>}
    </>
  );
}
