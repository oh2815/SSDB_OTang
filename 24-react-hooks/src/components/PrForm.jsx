import { useForm } from "react-hook-form";

export default function PrForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = () => {};
  const onInValid = () => {};
  console.log(watch()); //  콘솔에 정보 표시

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        type="text"
        placeholder="name"
        {...register("name", {
          required: "이름은 필수항목입니다.",
          minLength: {
            message: "이름은 최소 두글자 이상으로 입력해주세요.",
            value: 2,
          },
        })}
      />
      {errors.name?.message}
      <br />
      <input
        type="text"
        placeholder="age"
        {...register("age", {
          required: "나이는 0이상의 숫자만 입력 가능합니다.",
          // 최소 숫자 검증을 위해 min 속성 사용
          min: {
            message: "0이상의 숫자만 입력 가능합니다.",
            value: 0,
          },
        })}
      />
      {errors.age?.message}

      <br />
      <button type="submit">제출</button>
    </form>
  );
}
