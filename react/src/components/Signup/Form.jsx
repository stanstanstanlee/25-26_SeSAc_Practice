import React from "react";
import { useState } from "react";
export default function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    level: "",
  });

  const levels = [
    { id: 1, value: "신입" },
    { id: 2, value: "주니어" },
    { id: 3, value: "시니어" },
  ];

  function handleChange(event) {
    // const target = event["target"];
    // const { name, value } = target;
    const { name, value } = event["target"];

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form["password"] !== form["confirmPassword"]) {
      alert("비밀번호 불일치");
      return;
    }

    fetch("https://httpbin.org/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          이메일
          <br />
          <input
            className="border-2"
            type="email"
            name="email"
            value={form["email"]}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </label>
        <br></br>
        <label>
          비밀번호 <br />
          <input
            className="border-2"
            type="password"
            name="password"
            value={form["password"]}
            onChange={(event) => {
              handleChange(event);
            }}
            required
          />
        </label>
        <br></br>
        <label>
          비밀번호 확인 <br />
          <input
            className="border-2"
            type="password"
            name="confirmPassword"
            value={form["confirmPassword"]}
            onChange={(event) => {
              handleChange(event);
            }}
            required
          />
        </label>
        <br />
        <label>레벨</label>
        <br />
        {levels.map((level) => {
          // <label key={level.id}>
          //   <input
          //     type="radio"
          //     name="level"
          //     value={level.value}
          //     checked={form.level === level.value}
          //     onChange={handleChange}
          //   />
          // </label>;
          return (
            <label key={level.id}>
              <input
                type="radio"
                name="level"
                value={level.value}
                checked={form.level === level.value}
                onChange={handleChange}
              />
              {level.value}
            </label>
          );
        })}
        <br />
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
