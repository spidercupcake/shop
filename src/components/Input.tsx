import React from 'react';
import { IconType } from 'react-icons';

interface InputProps {
  type: string;
  placeholder: string;
  icon: IconType;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
  iconColor?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  icon: Icon,
  required = false,
  name,
  value,
  onChange,
  ariaLabel,
  iconColor = "text-white",
}) => {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-3 pr-10 bg-transparent border-2 border-white rounded-full text-white placeholder-white focus:outline-none"
        aria-label={ariaLabel}
      />
      <Icon className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${iconColor}`} />
    </div>
  );
};

export default Input;
