export default function Result(props) {
  const { content, background, color, fruit } = props.data; // 얘도 객체
  //   console.log("data", data);
  return (
    <div>
      <img src={`/${fruit}.jpg`} width={100} height={100} />
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
