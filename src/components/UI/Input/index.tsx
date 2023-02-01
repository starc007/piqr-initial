import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  cls?:string
} 

const Input = ({ cls, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`text-primary placeholder-gray-500 transition duration-300 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent ${cls}`}
    />
  );
};

export default Input;
