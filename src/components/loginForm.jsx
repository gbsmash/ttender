import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import { authContext } from "./authentication";
import axios from "axios";

function LoginForm() {
  const { setAuth } = useContext(authContext);
  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [succes, setSucces] = useState(false);

  const printOut = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://backendfortender.herokuapp.com/auth/login`,
        { email, password }
      );
      console.log(JSON.stringify(response?.data));
      console.log(response);

      setAuth({ email, password });
      setEmail("");
      setPassword("");
      setSucces(true);
    } catch (error) {
      console.log(authContext);
      if (!error.response) {
        setError("No Server Response");
      } else if (error.response?.statusCode === 404) {
        setError("Missing emailname or Password");
      } else {
        setError("Login Failed");
      }
      errorRef.current.focus();
    }
  };

  return (
    <div>
      {succes ? (
        <section></section>
      ) : (
        <div className="formContainer">
          <p ref={errorRef} className="error">
            {error}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              ref={userRef}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">password:</label>
            <input
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />

            <button>Sign In</button>

            <p>
              <span>Don't have an account?</span>
              <a href="">Sign Up</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
