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
        "relative flex items-center justify-center rounded-lg border border-white/50 bg-white px-4 py-2 text-sm font-semibold text-black/80 transition-all hover:-translate-y-px hover:border-yellow-500/50 hover:bg-white hover:text-black hover:shadow-xl focus-visible:outline active:bg-white/10",
        className,
      )}
    >
      {children}
    </button>
  );
}
