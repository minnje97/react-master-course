import React from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={value} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
} */

interface IForm {
  email: string;
  password: string;
  password2: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "이메일이 필요합니다",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: "이메일 형식이 아닙니다",
            },
          })}
          placeholder="이메일"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password", {
            required: "비밀번호가 필요합니다",
            minLength: { value: 5, message: "비밀번호가 너무 짧아요" },
          })}
          placeholder="비밀번호"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password2", {
            required: "비밀번호가 필요합니다",
            minLength: { value: 5, message: "비밀번호가 너무 짧아요" },
          })}
          placeholder="비밀번호 확인"
        />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
