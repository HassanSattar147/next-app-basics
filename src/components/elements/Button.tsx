import Link from "next/link";
import React from "react";

interface IProps {
  to: string;
  text: string;
}

const Button: React.FC<IProps> = ({ to, text }) => {
  return (
    <Link href={to}>
      <button className="bg-red-500 px-5 py-2 rounded-sm text-white hover:bg-red-600 hover:translate-y-[-2px]">
        {text}
      </button>
    </Link>
  );
};

export default Button;
