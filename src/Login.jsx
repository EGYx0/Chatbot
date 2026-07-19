import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/useAuth";
import { loginApi, getMeApi } from "./api/authApi";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  async function loginHandler(e) {
    e.preventDefault();

    try {
      const response = await loginApi(formData);
      console.log(response);
      const jwt = response.data.jwt;
      const userResponse = await getMeApi(jwt);
      const user = userResponse.data;
      login(jwt, user);
      if (user.role.type === "admin") {
        navigate("/chat");
      }
    } catch (error) {
      console.log(error.response?.data);
      console.log(error.response?.status);
    }
  }

  return (
    <form onSubmit={loginHandler}>
      <input
        type="email"
        placeholder="Email"
        name="identifier"
        onChange={(e) =>
          setFormData({ ...formData, identifier: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
