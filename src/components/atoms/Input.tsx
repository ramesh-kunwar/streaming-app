"use client";

import React from "react";

interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  // label: string;
  type: string;
}
const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  type,
}) => {
  return (
    <input
      className="w-full p-4 rounded bg-neutral-800 bg-opacity-50 text-white text-md"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
