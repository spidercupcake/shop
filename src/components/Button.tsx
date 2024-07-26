import React from 'react';

interface ButtonProps {
  type?: "button" | "submit" | "reset";  // Made optional
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;  // Accessibility
}

const Button: React.FC<ButtonProps> = ({
  type = "button",  // Default prop
  children,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-3 bg-white text-gray-400 border border-current font-bold rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
      aria-label={ariaLabel}  // Accessibility
    >
      {children}
    </button>
  );
};

export default Button;
