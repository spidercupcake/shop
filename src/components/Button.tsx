import React from "react";
import Link from "next/link";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
  ariaLabel,
  href,
}) => {
  if (href) {
    return (
      <Link href={href}>
        <a
          className="w-full py-3 bg-white text-gray-400 border border-current font-bold rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-3 bg-white text-gray-400 border border-current font-bold rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
