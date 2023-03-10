/// <reference types="vite-plugin-svgr/client" />
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ReactComponent as ErrorIcon } from "../../assets/contact/desktop/icon-error.svg";

function Textarea({ label, error, className, rhf, ...props }: TextareaProps) {
  return (
    <label className="relative block w-full mb-6">
      <span className="hidden">{label}</span>
      <textarea
        {...rhf}
        className="h-[6.25rem] w-full resize-none placeholder:opacity-50 placeholder:capitalize border-b focus:border-b-[3px] hover:border-b-[3px] border-white tracking-[1px] text-[0.9375rem] placeholder:text-white  font-medium leading-6 text-white bg-opacity-0 bg-white px-4 pb-3 outline-none"
        placeholder={label}
        {...props}
      />
      {error?.isError && (
        <div className="absolute flex justify-center items-center text-[0.75rem] italic text-white leading-6 my-auto h-fit right-0 top-[-23%] bottom-0">
          {error?.message}
          <ErrorIcon className="ml-2" />
        </div>
      )}
    </label>
  );
}

export default Textarea;

type TextareaProps = {
  rhf: UseFormRegisterReturn<"message">;
  label: string;
  error?: { isError: boolean; message: string };
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
