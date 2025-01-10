export default function PropsMap2({ arr }) {
  return (
    <div style={{ border: "1px solid red" }}>
      <ul>
        <li>
          props가 배열이고, 해당 배열로 map 연산을 실행시킬 때, props가 전달되지
          않는 순간을 대비해야함
        </li>
        <li>
          ? 를 이용해서 props가 전달되지 않았을 때 map연산을 하지 않을 수 있음
        </li>
      </ul>
      {/* 데이터의 유무가 확실하지 않을 때 물음표를 이용
        데이터가 있을 때만 이후 연산 진행됨
        */}
      {arr?.map((el, i) => {
        return <div key={i}>{el.name}</div>;
      })}
    </div>
  );
}
