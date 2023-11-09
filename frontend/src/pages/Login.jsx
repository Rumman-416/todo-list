import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  function login(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/login", { email: email, password: pw })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-blue-600 text-4xl">Login</h1>
      <form className="flex flex-col items-center">
        <input
          className="border border-blue-600 rounded px-5 py-2 m-3 focus:outline-none focus:ring focus:border-blue-600 w-10/12 "
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          className="border border-blue-600 rounded px-5 py-2 m-3 focus:outline-none focus:ring focus:border-blue-600 w-10/12 "
          type="text"
          onChange={(e) => setPw(e.target.value)}
          value={pw}
          placeholder="Password"
        />

        <button
          className="h-10 w-40 border rounded-2xl border-blue-600 hover:bg-blue-500 hover:text-white"
          onClick={login}
        >
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
