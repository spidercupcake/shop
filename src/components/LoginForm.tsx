"use client";
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import Link from "next/link";

interface LoginFormProps {
  toggleForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <Form title="Login" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Username"
        icon={FaUser}
        required
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        icon={FaLock}
        required
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-between items-center text-sm text-white mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember Me
        </label>
        <Link href="/forgot-password" className="text-white hover:underline">
          Forgot Password
        </Link>
      </div>
      <Button type="submit">Login</Button>
      <div className="text-white text-center mt-4">
        <p>
          Don't have an account?{" "}
          <button
            onClick={toggleForm}
            className="text-white font-semibold hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </Form>
  );
};

export default LoginForm;
