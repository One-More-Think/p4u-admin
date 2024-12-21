import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function LoginInput() {
  const navigate = useNavigate();

  function loginBtn() {
    navigate("/");
  }

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function saveId(e) {
    setId(e.target.value);
    console.log(e.target.value);
  }

  function savePassword(e) {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <Link to="/logintest">하이</Link>
      <span className="mt-30pxr text-21pxr font-semibold text-center block mb-44pxr">
        로그인
      </span>
      <form action="/" className="flex flex-col gap-12pxr">
        <input
          className="border-2 border-gray-300 rounded h-54pxr w-340pxr px-20pxr mx-auto"
          required
          name="id"
          type="text"
          id="id"
          value={id}
          placeholder="아이디를 입력해주세요."
          onChange={(e) => saveId(e)}
        />
        <input
          className="border-2 border-gray-300 rounded h-54pxr w-340pxr px-20pxr mx-auto"
          required
          name="password"
          type="password"
          id="password"
          value={password}
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => savePassword(e)}
        />
        <button
          onClick={loginBtn}
          type="submit"
          className="w-340pxr h-54pxr mx-auto mt-16pxr border border-purple-600 bg-purple-600 text-white font-semibold rounded hover:bg-white hover:text-purple-600"
        >
          <span>로그인</span>
        </button>
      </form>
    </>
  );
}

export default LoginInput;
