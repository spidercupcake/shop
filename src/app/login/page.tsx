"use client";
import React, { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

const LoginPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      {isRegistering ? (
        <RegisterForm toggleForm={toggleForm} />
      ) : (
        <LoginForm toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default LoginPage;
