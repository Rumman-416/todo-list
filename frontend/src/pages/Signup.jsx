import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  function signIn(e) {
    e.preventDefault();
    const userData = {
      name: user,
      email: email,
      password: pw,
    };
    axios
      .post("http://localhost:4000/user/signup", userData)
      .then((res) => {
        console.log("data sent");
        setUser(" ");
        setEmail(" ");
        setPw(" ");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-blue-600 text-4xl">Signup with us</h1>
      <form className="flex flex-col items-center">
        <input
          className="border border-blue-600 rounded px-5 py-2 m-3 focus:outline-none focus:ring focus:border-blue-600 w-10/12"
          type="text"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          placeholder="User Name"
        />
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
          onClick={signIn}
        >
          sign in
        </button>
      </form>
    </div>
  );
};

export default Signup;
