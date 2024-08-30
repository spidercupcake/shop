"use client";
import React, { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import React, { useState } from 'react';
import LoginRegisterForm from '../components/LoginRegisterForm';

const LoginPage: React.FC = () => {
  const [formType, setFormType] = useState<'login' | 'register'>('login');

  const toggleForm = () => {
    setFormType((prev) => (prev === 'login' ? 'register' : 'login'));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <LoginRegisterForm formType={formType} toggleForm={toggleForm} />
    </div>
  );
};

export default LoginPage;
