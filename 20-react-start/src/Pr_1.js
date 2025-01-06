export default function Pr_1() {
  const name = "멍뭉";
  const animal = "강아지";
  const a = 8;
  const b = 5;

  return (
    <div>
      <h2>
        제 반려동물의 이름은 {name} 입니다.
        {name}은 {animal}입니다.
      </h2>
      <br />
      <span>{3 + 5 == 8 ? "정답입니다" : "오답입니다"}</span>
      <br />
      <span>{a > b && "a가 b보다 큽니다"}</span>
    </div>
  );
}
