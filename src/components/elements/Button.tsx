import React from "react";

interface IProps {
  to?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ to, text, onClick }) => {
  return (
    // <Link href={to}>
    <button
      onClick={onClick}
      className="bg-red-500 px-5 py-2 rounded-sm text-white hover:bg-red-600 hover:translate-y-[-2px]"
    >
      {text}
    </button>
    // </Link>
  );
};

export default Button;
