import React from "react";

interface LoaderProps {
  h?: string;
  w?: string;
  col?: string;
}

const Loader = ({ h, w, col }: LoaderProps) => {
  return (
    <svg
      fill="none"
      className={`
        ${h ? h : "h-10"}
        ${w ? w : "w-10"}
        ${col ? col : "text-white"}
      animate-spin`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Loader;
