// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-3 bg-white text-green-600 font-bold rounded-full shadow-lg hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

export default Button;
