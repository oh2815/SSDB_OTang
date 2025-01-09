export function FunctionProps(props) {
  // 인자로 props를 받아줌
  console.log(props);
  console.log(typeof props); // 항상 객체이므로 object가 뜸

  return (
    <div>
      {/* 부모에서 넘겨주는 data가 객체로 받아와지기 때문에 props.name으로 접근 */}
      <h5>{props.name}</h5>
      <p>
        {props.number} 개에 {props.krprice}원
      </p>
      <hr />
    </div>
  );
}

export function FunctionProps2(props) {
  const { name, number, krPrice } = props; // 객체 형태로 들어오기떄문에 객체구조분해 문법 사용 가능
  return (
    <div>
      {/* 객체분해할당 문법을 사용했기 떄문에 props없이 사용 가능 */}
      <h5>{name}</h5>
      <p>
        {number} 개에 {krPrice}원
      </p>
      <hr />
    </div>
  );
}
export function FunctionProps3({ name, number, krPrice }) {
  // props를 받아오지 않고 바로 구조분해할당을 해준다.
  // 이미 props에는 name, number, krPrice 가 있는 걸 알기때문에 바로 사용이 가능
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

// 여기까지는 props가 객체로 오기때문에 어떤 형식으로 객체 구조 분해 문법을 사용해서 data를 받아오는지를 알아봤다.

// 밑에는 children을 사용해서 data설정
export function FunctionProps4({
  name,
  number = 23,
  krPrice = 232323, // default값 설정 가능
  // 따로 default값을 설정 안해주고, 인자에 바로 값을 입력해서 default를 설정 해줄 수 있다.
  children, // children도 부모 Component에서 전달을 해주기 떄문에 인자에 적어야한다.
}) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number} 개에 {krPrice}원
      </p>
      {/* children요소는 부모 Component의 tag(<열림태그>와 <닫힘태그> 사이)안에 적혀있는 태그나 문자열들이 data로 전달됨. */}
      {/* children요소도 다른 속성들처럼 children = ~~~라고 설정 해 줄수는 있지만 그렇게 사용하지는 않는다. */}
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
