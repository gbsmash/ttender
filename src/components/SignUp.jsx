import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const password_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function SignUp() {
  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");

  const [password, setpassword] = useState("");
  const [validpassword, setValidpassword] = useState(false);
  const [passwordFocus, setpasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://backendfortender.herokuapp.com/auth/registration`,
        JSON.stringify({ email, password }),
        {
          headers: { accept: "*/*", "Content-Type": "application/json" },
        }
      );

      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      // setUser("");
      setpassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          onChange={(e) => setUser(e.target.value)}
          autoComplete="off"
          value={user}
          required
        /> */}

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setpassword(e.target.value)}
          autoComplete="off"
          value={password}
          required
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          value={email}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
