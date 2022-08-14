import React, { ButtonHTMLAttributes, ReactNode } from "react";

const Button = ({
  //childrenとそれ以外を分ける
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
}) => {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-full bg-lime-900 text-white shadow"
    >
      {children}
    </button>
  );
};

export default Button;
