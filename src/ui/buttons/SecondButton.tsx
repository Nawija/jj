import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SecondButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "relative flex items-center justify-center rounded-lg border bg-gray-100 px-3 py-1.5 text-xs font-semibold text-black transition-colors hover:border-white hover:bg-black/10 hover:text-white focus-visible:outline active:bg-white/20",
        className,
      )}
    >
      {children}
    </button>
  );
}
