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
    <div className="flex items-center justify-center min-h-screen">
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
        <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>
          <a href="#" className="text-gray-300 hover:underline">Forgot Password</a>
        </div>
        <Button type="submit">Login</Button>
        <div className="text-gray-300 text-center mt-4">
          <p>Don't have an account? <a href="#" className="font-semibold hover:underline">Register</a></p>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
