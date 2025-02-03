import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = () => {
    console.warn("Name: ", name);
    console.warn("Email: ", email);
    console.warn("Password: ", password);
  };

  return (
    <div className="signUp">
      <h1 className="signUpHeading">SignUp</h1>
      <input
        className="inputBox"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        className="inputBox"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        className="inputBox"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={collectData} className="signUpButton">
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
