export function FunctionProps(props) {
  console.log(props);
  console.log(typeof props); // 항상 객체이므로 object가 뜸

  return (
    <div>
      <h5>{props.name}</h5>
      <p>
        {props.number} 개에 {props.krprice}원
      </p>
      <hr />
    </div>
  );
}

export function FunctionProps2(props) {
  const { name, number, krPrice } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number} 개에 {krPrice}원
      </p>
      <hr />
    </div>
  );
}
export function FunctionProps3({ name, number, krPrice }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number} 개에 {krPrice}원
      </p>
      <hr />
    </div>
  );
}
export function FunctionProps4({
  name,
  number = 23,
  krPrice = 232323, // default값 설정 가능
  children,
}) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number} 개에 {krPrice}원
      </p>
      <p>children 요소: {children}</p>
      <hr />
    </div>
  );
}
// FunctionProps4 기본값 설정
// FunctionProps4.defaultProps = {
//   krPrice: 15000,
//   number: 10,
// };
