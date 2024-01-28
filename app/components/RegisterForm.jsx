"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

async function registerUser(data) {
  const URL = "/api/register"; // Assurez-vous que votre API Next.js est correctement configurée
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(URL, options);
  return response;
}

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "" || confirm === "") {
      setMessage("Please Fill All Fields");
      setHasError(true);
      return;
    }

    if (password !== confirm) {
      setMessage("Password and Confirm Password are different");
      setHasError(true);
      return;
    }

    setMessage("");
    setHasError(false);

    const response = await registerUser({ email, password });
    const responseJson = await response.json();

    if (responseJson.status === 200) {
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirm("");
      setMessage(responseJson.message);
      setTimeout(() => {
        setMessage("");
      }, 4000);
    } else {
      setHasError(true);
      setMessage(responseJson.message);
    }
  };

  const toggleShow = () => {
    setShowPassword((current) => !current);
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <div className="pass-eye">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            {showPassword ? (
              <FaEyeSlash onClick={toggleShow} />
            ) : (
              <FaEye onClick={toggleShow} />
            )}
          </div>
          <label htmlFor="confirm">Confirm Password</label>
          <div className="pass-eye">
            <input
              type={showPassword ? "text" : "password"}
              id="confirm"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />{" "}
            {showPassword ? (
              <FaEyeSlash onClick={toggleShow} />
            ) : (
              <FaEye onClick={toggleShow} />
            )}
          </div>
          <input type="submit" value="Create" className="btn" />
        </form>
      </div>
      Already have an account ? <Link href="/login">Go to Login Page</Link>
      {message && <div className={hasError ? "error" : "ok"}>{message}</div>}
    </>
  );
};

export default RegisterForm;