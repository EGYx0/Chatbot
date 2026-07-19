import React from "react";
import { useState } from "react";
import { useAuth } from "./auth/useAuth";
import { useNavigate } from "react-router-dom";
import { signupApi } from "./api/authApi";

function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  async function handleSignup(e) {
    e.preventDefault();
    const response = await signupApi(formData);
    login(response.data.user);
    navigate("/chat");
  }
  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="userName"
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button> SignUp</button>
    </form>
  );
}

export default Signup;
