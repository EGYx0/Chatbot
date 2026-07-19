import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/Login");
  }
  function handleRegister() {
    navigate("/signup");
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Sign up </button>
    </div>
  );
}

export default LoginPage;
