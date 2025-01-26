export default function Result(props) {
  // props.data의 객체가 가지고있는 키들을 구조분해할당 문법 사용해줌
  const { content, background, color, fruit } = props.data; // 얘도 객체
  //   console.log("data", data);
  // props.data를 받아주고 있으므로 background, color, content, fruit가 넘어오고있음
  return (
    <div>
      {/* 여기서 `/`가 public을 의미한다. 변수와 문자열 같이 넣고있기에 벡틱 사용 */}
      {/* 여기에 들어와있는 fruit라는 state는 알아서 변경되게 설정을 해주기 때문에 더이상 여기서 건드릴 것은 없음. */}
      <img src={`/${fruit}.jpg`} width={100} height={100} />
      {/* 웹에서 보여주고 싶은 content */}
      <p
        style={{
          backgroundColor: background,
          color: color,
          width: "100px",
          height: "30px",
          textAlign: "center",
          lineHeight: "30px",
        }}
      >
        {content}
      </p>
    </div>
  );
}
