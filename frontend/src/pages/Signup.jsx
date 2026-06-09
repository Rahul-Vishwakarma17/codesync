import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthCard from "../components/common/AuthCard";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { registerUser } from "../services/authService";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(formData);

      alert("Account created successfully!");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <AuthCard
      title="Create Account 🚀"
      subtitle="Start collaborating with other developers."
    >
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

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
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          className="w-full"
        >
          Create Account
        </Button>
      </form>
    </AuthCard>
  );
}

export default Signup;