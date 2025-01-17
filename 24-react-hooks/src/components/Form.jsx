import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register, // input 의 변경 감지
    handleSubmit, // form 의 submit 이벤트 발생시 호출
    watch, // 특정 필드의 값을 실시간 관찰
    formState: { errors },
  } = useForm();

  // 단축 평가
  //   console.log("단축평가 || 논리합", true || "hello"); // true
  //   console.log("단축평가 || 논리합", false || "hello"); // "hello"
  //   console.log("단축평가 && 논리곱", true && "hi"); // "hi"
  //   console.log("단축평가 && 논리곱", false && "hi"); // false

  const userNameRegister = register("username");
  //   console.log(userNameRegister); // register 의 반환값은 객체

  console.log("errors", errors);

  const onValid = (data) => {
    console.log("유효한 데이터", data);
    // {email, username, password}

    // 이 data로 axios 요청
  };
  const onInValid = (err) => {
    console.log("유효하지 않은 데이터", err);
    // 폼 내부에 작성한 유효성 검사가 실패했을 때의 코드 작성
  };
  console.log("watch", watch());
  console.log("watch username", watch("username"));
  return (
    /* 
      handleSubmit(funcA[, funcB]): 인자로 함수를 두 개 받음
      - 자동으로 새로고침 방지
      - funcA: 필수! 유효성검증이 모두 만족했을 때, 실제 제출할 때 실행
      - funcB: 선택, 유효하지 않을 때 실행될 함수
      */
    <form
      style={{ border: "1px solid salmon" }}
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      <input
        type="text"
        placeholder="username"
        {...register("username", {
          // required 가 지켜지지 않았다면 errors 객체로 메세지 전달됨
          // errors.username.message
          required: "이름을 입력해주세요",
          minLength: {
            message: "이름은 최소 두글자 이상으로 입력해주세요.",
            value: 2, // minLength
          },
        })}
      />
      {errors.username?.message}
      <br />
      <input
        type="email"
        placeholder="email(gmail)"
        {...register("email", {
          required: "이메일을 입력해주세요.",
          validate: {
            useGmail: (value) => {
              // 인자로 들어오는 value는 input.value
              return (
                // 앞의 연산이 true라면 true 리턴
                // 앞의 연산이 false라면 뒤의 string 리턴
                value.includes("gmail.com") || "gmail로만 가입 가능합니다."
              );
            },
          },
        })}
      />
      {errors.email?.message}
      <br />
      <input type="password" placeholder="password" {...register("password")} />
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
