/// <reference types="vite-plugin-svgr/client" />
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ReactComponent as ErrorIcon } from "../../assets/contact/desktop/icon-error.svg";

function InputText({ label, error, className, rhf, ...props }: InputTextProps) {
  return (
    <label className="relative block w-full mb-6">
      <span className="hidden">{label}</span>
      <input
        {...rhf}
        className={
          "w-full  h-9 border-b focus:border-b-[3px] hover:border-b-[3px] border-white tracking-[1px] text-[0.9375rem] font-medium leading-6 text-white placeholder:text-white  placeholder:text-opacity-50 bg-opacity-0 bg-white px-4 pb-3 outline-none " +
          className
        }
        placeholder={label}
        {...props}
        type="text"
      />
      {error?.isError && (
        <div className="absolute flex justify-center items-center text-[0.75rem] italic text-white leading-6 bg-peach rounded-l-full pl-1 my-auto h-full right-0 top-[-20%] bottom-0">
          {error?.message}
          <ErrorIcon className="ml-2" />
        </div>
      )}
    </label>
  );
}

export default InputText;

type InputTextProps = {
  rhf:
    | UseFormRegisterReturn<"name">
    | UseFormRegisterReturn<"phone">
    | UseFormRegisterReturn<"email">;
  label: string;
  error?: { isError: boolean; message: string };
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
