// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import Input from './Input';
import Button from './Button';
import Form from './Form';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div>
    <Form title="Login" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Username" icon={FaUser} required name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input type="password" placeholder="Password" icon={FaLock} required name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="flex justify-between items-center text-sm text-white mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember Me
        </label>
        <a href="#" className="text-white hover:underline">Forgot Password</a>
      </div>
      <Button type="submit">Login</Button>
      <div className="text-white text-center mt-4">
        <p>Don't have an account? <a href="#" className="text-white font-semibold hover:underline">Register</a></p>
      </div>
    </Form>
    </div>
  );
};

export default LoginForm;
