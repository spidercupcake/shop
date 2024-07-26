// src/components/Form.tsx
import React from 'react';

interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ title, children, onSubmit }) => {
  return (
    <div id='FUCKING' className="p-8 bg-green-700 rounded-lg shadow-md w-96">
      <form onSubmit={onSubmit}>
        <h1 className="text-3xl text-white text-center mb-6">{title}</h1>
        {children}
      </form>
    </div>
  );
};

export default Form;
