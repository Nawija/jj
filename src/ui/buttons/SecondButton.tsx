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
        "relative flex items-center justify-center rounded-lg border bg-white px-4 py-2 text-sm font-semibold text-black/80 transition-all hover:border-black/20 border-black/30 hover:-translate-y-1 hover:shadow-xl shadow-lg hover:bg-white/80 hover:text-red-700 focus-visible:outline active:bg-white/10",
        className,
      )}
    >
      {children}
    </button>
  );
}
