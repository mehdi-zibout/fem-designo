import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

function Button({
  children,
  isDark = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`pb-4 transition duration-500 pt-[1.125rem] px-6 rounded-lg tracking-[1px] text-[0.9375rem] font-medium leading-5 ${
        isDark
          ? "text-darkGrey bg-white hover:bg-lightPeach hover:text-white"
          : "bg-peach text-white hover:bg-lightPeach"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

type ButtonProps = {
  isDark?: boolean;
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
