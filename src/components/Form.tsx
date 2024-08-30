import React from "react";

interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ title, children, onSubmit }) => {
  return (
    <div className="p-8 rounded-lg shadow-md w-96 border border-gray-200 bg-white bg-opacity-10 backdrop-blur-md backdrop-brightness-75">
      <form onSubmit={onSubmit}>
        <h1 className="text-3xl text-white text-center mb-6">{title}</h1>
        {children}
      </form>
    </div>
  );
};

export default Form;
