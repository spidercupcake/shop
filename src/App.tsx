// src/App.tsx
import React from 'react';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoginForm />
    </div>
  );
};

export default App;
