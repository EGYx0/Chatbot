import React from "react";
import { useAuth } from "./auth/useAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login({
      name: "ahmad",
      email: "ahmad@example.com",
    });

    navigate("/chat");
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
