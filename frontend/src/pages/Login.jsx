import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthCard from "../components/common/AuthCard";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response =
        await loginUser(formData);

      login(
        response.data.user,
        response.data.token
      );

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <AuthCard
      title="Welcome Back 👋"
      subtitle="Login to continue coding together."
    >
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          className="w-full"
        >
          Login
        </Button>
      </form>
    </AuthCard>
  );
}

export default Login;