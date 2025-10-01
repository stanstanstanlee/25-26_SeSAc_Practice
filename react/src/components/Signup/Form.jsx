import React from "react";
import { useState } from "react";
export default function Form() {
  const [form, setForm] = useState({
    email: "",
    pasword: "",
    confirmPassword: "",
  });
  function handleChange(event) {
    const target = event["target"];
    const { name, value } = target;

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  }
  return (
    <div>
      <form className="form">
        <label>이메일</label> <br></br>
        <input
          className="border-2"
          type="email"
          name="email"
          value={form["email"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br></br>
        <label>비밀번호</label> <br></br>
        <input
          className="border-2"
          type="password"
          name="password"
          value={form["password"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br></br>
        <label>비밀번호 확인</label> <br></br>
        <input
          className="border-2"
          type="password"
          name="confirmPassword"
          value={form["confirmPassword"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br></br>
        <label>레벨</label>
        <br></br>
        <input type="radio" name="level" value="신입" /> 신입
        <input type="radio" name="level" value="주니어" /> 주니어
        <input type="radio" name="level" value="시니어" /> 시니어
        <br></br>
        <input
          className="bg-blue-500 text-white px-5 py-2 cursor-pointer"
          type="submit"
          name=""
          value="회원가입"
        ></input>
      </form>
    </div>
  );
}
