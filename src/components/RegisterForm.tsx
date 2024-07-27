import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import Input from './Input';
import Button from './Button';
import Form from './Form';

interface RegisterFormProps {
  toggleForm: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Username:', username, 'Password:', password, 'Email:', email);
  };

  return (
    <Form title="Register" onSubmit={handleSubmit}>
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
        type="email"
        placeholder="Email"
        icon={FaUser}
        required
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <Button type="submit">Register</Button>
      <div className="text-gray-300 text-center mt-4">
        <p>
          Already have an account?{' '}
          <a href="#" onClick={toggleForm} className="font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </Form>
  );
};

export default RegisterForm;
