export default function PropsMap2({ arr }) {
  return (
    <div style={{ border: "1px solid red" }}>
      <ul>
        <li>
          props가 배열이고, 해당 배열로 map 연산을 실행시킬 때, props가 전달되지
          않는 순간을 대비해야함 ( 전달되지 않으면 undefined 나옴)
        </li>
        <li>
          대비하는 방법 : ? 를 이용해서 props가 전달되지 않았을 때 map연산을
          하지 않을 수 있음
        </li>
      </ul>
      {/* 데이터의 유무가 확실하지 않을 때 물음표를 이용
        데이터가 있을 때만 이후 연산 진행됨

        - arr가 있다면 ? 이후를 진행하고, 없다면 arr에서 멈춘다.
        - ? 없이 인자 전달 해주지 않으면 오류나고 ? 넣으면 오류 사라지고 알아서 판단해서 작동 시켜준다.
        */}
      {arr?.map((el, i) => {
        return <div key={i}>{el.name}</div>;
      })}
    </div>
  );
}
